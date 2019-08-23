import React,{Component} from 'react';
import './App.css';
import Counter from './components/counter';

class App extends Component{
  constructor(props){
    super(props)
      this.state={
        item:"",
        todoitem:[]
      }
      this.onChangeHandler=this.onChangeHandler.bind(this);
      this.addtask=this.addtask.bind(this);
      this.delete=this.delete.bind(this);
  }
  onChangeHandler(event){
var inputval=event.target.value;
this.setState({item:inputval});
  }
  addtask(){
    var inputval=this.state.item;
    var itemInstance=this.state.todoitem;
    itemInstance.push(inputval);
this.setState({todoitem:itemInstance,
  item:''
}
 
  );
  
  }
  delete(event){
    var id=event.target.id;
    var itemInstance=this.state.todoitem;
    itemInstance.splice(id,1);
this.setState({todoitem:itemInstance});
  }
  
  render(){
    var listitem=this.state.todoitem.map((e,i)=>
   <li key={i}>{e} <span onClick={this.delete} id={i}>X</span></li>
    )
    return (
      <div>
        
         <input type="text" value={this.state.item} onChange={this.onChangeHandler}/>
         <p>{this.state.item}</p>
         <button type="submit" onClick={this.addtask}>Add Task</button>
         <div>
           <ul>
             {listitem}
           </ul>
         </div>
         <Counter></Counter>
        </div>
     
     );
  }
 
}

export default App;
