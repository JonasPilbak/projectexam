import React, { Component } from 'react';
import PostForm from "./PostForm";

class InputPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        fetch('http://localhost:46897/api/Users')
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }
    render() { 
        const  { isLoaded, items } = this.state;
        
        if (!isLoaded)
        return <div>Loading...</div>;
        else{

        
            return(

                <div>
                    <ul>
                    {items.map(item => 
                        <li key={item.Password}>{item.Name}</li>
                      
                        )}
                    
                    
                    
                    
                   

                    </ul>

                </div>
            )
       
        
    }
}
}
 
export default InputPage;