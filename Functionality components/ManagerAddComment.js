import React from 'react'
import axios from 'axios'




class ManagerAddComment extends Component {

  
 
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
            TextContent: '',
            CommentID: '',


        }

    }

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
    componentDidMount() {

        fetch('http://localhost:46897/api/comments')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
    
    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:46897/api/comments', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
	}
    

    /**
     * render
     *
     * Render UI
     */
    render() {

        const  { isLoaded, items } = this.state;
        const { TextContent } = this.state
        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div  className="ManagerAddComment">

                <div className="SubmitForm">
				<form onSubmit={this.submitHandler}>
					<div className="Comment">
					<h2>
						Comment current idea
						</h2>
						<input
							type="text"
							name="TextContent"
							value={TextContent}
							onChange={this.changeHandler}
						/>
					</div>
				
					
					<button type="submit">Add comment</button>
				</form>
             
                </div>
              

              <div className="Table">
              <table className="container">
                <tbody>
                  <tr>

              <th>Title</th>
                            <th>Description</th>
                            <th>Text</th>
                           
                            <th>Key</th>
                  </tr>
                    {items.map(item => (
                        <tr className="items" key={item.ideaID}>
                          
                           

                             <td className="titles">{item.title}</td>
                            
                           
                            
                           

                            <td>  {item.description}</td>
                          
                           

                            <td> {item.TextContent}</td>
                        
                          
                             
                            <td>     {item.ideaID}</td>
                           
                          
                          
                        </tr>
                        
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        );

    }

}

export default ManagerAddComment;