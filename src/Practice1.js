import React,{Component} from "react";

class Practice1 extends Component{
    constructor() {
        super();
        this.state = {
            hobbies: [
                'Dancing',
                'Reading Book',
                'Music',
                'Playing Game',
                'Cooking'
            ],
           // isClicked : false
        }
    }
    showHobbies = (item) => {
      console.log('clicked...');  
      /*<ul>
        {this.state.hobbies.map(function(item) {
        return <li key={item}>{item}</li>;
        })}
      </ul>*/
      console.log(this.setState({item}));
    }
    render()
    {
        return(
            <div>
                <h1>My first practice document</h1>
                <ul>
                    {this.state.hobbies.map(function(item) {
                    return <li key={item}>{item}</li>;
                    })}
                </ul>
                 <button onClick={this.showHobbies}>Hobbies</button>
            </div>
        )

    }
}
 export default Practice1;