import axios from 'axios';
import React from 'react';
import "./table.css"



class ApiFetch extends React.Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: []
           
           
        }

        
    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        axios.get('http://localhost:46897/api/Ideas')
        .then(response => response.data)
        .then((data) => {
            this.setState({items: data});
        });
        
     
    }
    


deleteTitle = (itemID) => {
axios.delete('http://localhost:46897/api/Ideas/'+itemID)
.then(response => {
    if(response.data != null){
       
        this.setState({
            items: this.state.items.filter(item => item.ideaID !==itemID)
        });
    }

});
};

    /**
     * render
     *
     * Render UI
     */
    render() {

       

       

        return (
            <div  className="Api">

          
              

              
              <table className="container">
                <tbody>
                  <tr>

              <th>Title</th>
                            <th>Tag</th>
                            <th>Description</th>
                            
                            <th>Delete</th>
                  </tr>
                    {this.state.items.map((item) => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                           
                            
                           

                            <td>  {item.description}</td>
                          
                           

                            <td> {item.text}</td>
                        
                          
                                
                            
                            <td className="right_row" id="button">
                                <button className="delete_button" onClick={this.deleteTitle.bind(this, item.ideaID)}>Delete</button>
                            </td>
                          
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
               
            </div>
        );

    }

}

export default ApiFetch;