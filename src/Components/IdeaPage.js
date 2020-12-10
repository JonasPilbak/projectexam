import React, { Component } from 'react';
import SideBar from "./Sidebar";
import "../IdeaPages.css";
import Idinput from "./Idinput";
import TextAreacomp from "./TextAreacomp";
import Taginput from "./TagInput";
import Titleinput from "./TitleInput";
import Text from "./Text"
class IdeaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 


            <div className="inputs">
                <SideBar/>
                <div className="title">
                <Titleinput/>
                </div>
                  <div className="Idinput">

<Idinput/>

</div>
<div className="description">

<TextAreacomp/>
</div>
<div className="tag_emp">
<Taginput/>

</div>
<div className="checkboxes">

    <Text/>
    <Text/>
    <Text/>
    <Text/>
    <Text/>
            


</div>
<div className="checkboxstuff">

<Text/>
    <Text/>
    <Text/>
    <Text/>
    <Text/>
</div>


            </div>



         );
    }
}
 
export default IdeaPage;