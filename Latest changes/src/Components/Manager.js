import React, { Component } from 'react';
import axios from 'axios';
class Manager extends Component {
	constructor(props) {
		super(props)

		this.state = {
			Name: '',
            Password: '',
            hidden: true,
            isLoaded: false
            
		};
        
        this.changeHandlerName = this.changeHandlerName.bind(this);
        this.changeHandlerPassword = this.changeHandlerPassword.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
	}
        
	changeHandlerName = e => {
		this.setState({ [e.target.name]: e.target.value })
    }
    
    changeHandlerPassword = e => {
		this.setState({ [e.target.Password]: e.target.value })
	}


	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:46897/api/users', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}


 

    

	render() {
      

		return (












			<div className="Manager">
				<form onSubmit={this.submitHandler}>
					<div className="userName">
					<h2>
						UserName
						</h2>
						<input
							type="text"
							name="name"
							value={this.state.name}
							onChange={this.changeHandler}
						/>
					</div>
					<div className="Password">
						<h2>
						Password
						</h2>
						<input
							type={this.state.hidden ? "password" : "text"}
							name="password"
							value={this.state.password}
							onChange={this.changeHandlerName}
						/>
					</div>
                
					<button type="submit">Submit</button>
				</form>
             
			</div>

        )
        
        


          
	}
}

export default Manager