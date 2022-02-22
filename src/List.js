import { Component } from "react";

export class List extends Component {
    state= {
        userInput:'',
        toDoList:[]
    }
   onChangeEvent(e) {
        this.setState({userInput:e})
    }
    addItem (input) {
        if (input === "") {
            
            alert('Please enter an item')
        }
        else {
            let listArray= this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList:listArray, userInput:''})
        }
    }
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle ('crossed')
    }
    deleteItem() {
        let listArray=this.state.toDoList;
        listArray= [];
        this.setState({toDoList:listArray})
    }
    submitForm(e) {
        e.preventDefault();
    }
    
    render () {
        return <div>
            <form onSubmit={this.submitForm}>
                <div className ="container">
                <input type='text' onChange={(e) =>{this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
                </div>
                <div className ="container">
                    <button className="add" onClick={()=> this.addItem(this.state.userInput)} >Add</button>
                </div>
                <ul>
                    {this.state.toDoList.map ((item, index) => (
                        <li onClick={this.crossedWord} key={index}>{item} </li>))}
                </ul>
                <div className ="container">
                    <button className="delete" onClick={()=> this.deleteItem()} >Delete</button>
                </div>

            </form>
        </div>
    }
}