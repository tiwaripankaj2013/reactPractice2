import React from 'react';
import ToDOItem from './ToDoItem'
import '../css/todoapp.css';

class ToDoList extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
        listItem: [],
        textValue: ""
    }
    }

    //Update Input

    hobbiesList = (event) => {
        this.setState(
            {
                textValue: event.target.value
            }
        )
    }

    //Add Hobbies

    addList = () => {
        if(this.state.textValue !== ""){
            const storeListItem = [...this.state.listItem, this.state.textValue];
            this.setState(
                {
                    textValue:'', listItem:storeListItem
                }
            )
        }
    }

    // Delete Hobbies

    deleteListItem = (id) => {
        const oldList = [...this.state.listItem]
        console.log(oldList);
        // Filter values and leave value which we need to delete
        const newList = oldList.filter((element, i) => {
            return i !== id
        });
        console.log(newList)
        // New list in state
        this.setState({
          listItem:newList
        });
    }
    render() {
        return(
            <React.Fragment>
                <h1 className="text-center">ToDo App</h1>
                <div className="row">
                    <div className="col-9">
                         <input className="form-control" type="text" value={this.state.textValue} onChange={this.hobbiesList.bind(this)}/>
                    </div>
                    <div className="col-2">
                    <button className="btn btn-warning" onClick={this.addList}>Add Hobbies </button>
                    </div>
                    <ul className="list-unstyled row hobbies-list">
                    {
                        this.state.listItem.map((value,i) => {
                            return <ToDOItem key={i} id={i} value={value} sendData={this.deleteListItem}/>
                        })
                    }
                   </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default ToDoList;