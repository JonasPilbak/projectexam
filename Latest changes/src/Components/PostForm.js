import React, { Component } from 'react'
import axios from 'axios'

import "../Post.css"
class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			title: '',
			description: '',
			text: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:46897/api/Ideas', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}

	render() {
		const { title, description, text } = this.state
		return (
			<div className="Postpage">
				<form onSubmit={this.submitHandler}>
					<div className="Title_input">
					<h2>
						Title
						</h2>
						<input className="input"
							type="text"
							name="title"
							value={title}
							onChange={this.changeHandler}
						/>
					</div>
					
				
				</form>

				<form  onSubmit={this.submitHandler}>

				<div className="Description_input">
						<h2>
						Description
						</h2>
						<input
							type="text"
							name="description"
							value={description}
							onChange={this.changeHandler}
						/>
					</div>
				
				</form>

				<form  onSubmit={this.submitHandler}>

				<div className="Text_input">
					<h2>
						Tag
						</h2>
						
						<input
							type="text"
							name="text"
							value={text}
							onChange={this.changeHandler}
						/>
					</div>
				</form >
				<button type="submit">Submit</button>
			</div>
		)
	}
}

export default PostForm