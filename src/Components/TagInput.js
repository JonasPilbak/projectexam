import React, { Component } from 'react'

class Taginput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tag_emp: null
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
        const {tag_emp} = this.state
        return ( 
           
            <div className="id_inputs">
                    <div className="id">

                    
                 
                <form onSubmit={this.handleSubmit}>
                       <p># is: {tag_emp}</p>
                <p><input type="text" placeholder="Write #" title='tag_emp' onChange={this.handleInputChange}></input></p>


                </form>

                    </div>
            </div>
         );
    }
}
 
export default Taginput;