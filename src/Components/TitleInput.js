import React, { Component } from 'react';
import "../Title_input.css";

class TitleInput extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Title: null
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
        const {Title} = this.state
        return ( 
           
            <div className="title_container">
                   
                   

                    
                 
                <form onSubmit={this.handleSubmit}>
                <div>
                    <p>Title is: {Title}</p>
              <input type="text" placeholder="Write title" title='Title' onChange={this.handleInputChange}></input>
            </div>
   

                </form>

                    </div>
         );
    }
}
 
export default TitleInput;