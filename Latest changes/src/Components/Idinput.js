import React, { Component } from 'react'
import "../IDinput.css";
class Idinput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            ID_emp: null
         }
    }


    handleSubmit = (event) => 
    {
        event.preventDefault()
    }

    handleInputChange = (event) =>
    {

        this.setState({
[event.target.title]: event.target.value

        })
    }


    render() { 
        const {ID_emp} = this.state
        return ( 
           
            <div className="id_inputs">
                    <div className="id">

                    
                 
                <form onSubmit={this.handleSubmit}>
                       <p>ID is: {ID_emp}</p>
                <p><input type="text" placeholder="Write ID" title='ID_emp' onChange={this.handleInputChange}></input></p>


                </form>

                    </div>
            </div>
         );
    }
}
 
export default Idinput;