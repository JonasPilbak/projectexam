import axios from 'axios';
import React from 'react';
import "./table.css"



class FetchIdeas extends React.Component {

  
 
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
                            
                         
                  </tr>
                    {this.state.items.map((item) => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                           
                            
                           

                            <td>  {item.description}</td>
                          
                           

                            <td> {item.text}</td>
                        
                          
                                
                            
                            
                            
                          
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
               
            </div>
        );

    }

}

export default FetchIdeas;