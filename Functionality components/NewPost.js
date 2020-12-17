import React, {Component} from 'react';
import axios from 'axios';
import "./post_form.css";

class NewPost extends Component {
  state = {
    title: '',
    description: '',
    text: ''
   
  }

  changHandler = (e) => {
    this.setState({[e.target.name]: e.target.value });
  }
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post('http://localhost:46897/api/ideas', this.state)
    .then(response => {
      console.log(response)
      alert("You have succefully added a idea");

    })
    .catch(error => {
      console.log(error)
    })
    
    
   
    }

  

  render() {
    const {  title, description, text} = this.state
 
    
    return (
      
      <div>
        <form onSubmit={this.submitHandler}>
         
           
            <div className="post_form">
            <h1>Create the Idea</h1>
            <input type="text" name="title" id="title" placeholder="Your Title" value={title} onChange={this.changHandler}/>
            
            <div>
            <input type="text" name="text" id="text" placeholder="Your Tag #"  value={text}  onChange={this.changHandler}/>
            </div>
            <div>
            <textarea type="text" name="description" id="description" placeholder="Type your Message " value={description} onChange={this.changHandler}/>
            </div>
           
          
          <button className="submit_button" type="submit"  >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default NewPost;