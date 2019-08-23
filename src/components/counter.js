import React, { Component } from 'react';
class Counter extends Component {
    state = { 
  count:0
     };
     styles = {
      fontSize:20,
      backgroundColor: 'yellow',
      color:'white',
      marginLeft:10,
      padding:5
     };
     styles1 = {
        fontSize:20,
        backgroundColor: 'blue',
        color:'white',
        marginLeft:10,
        padding:5
     };
    render()
     { 
        return (
            <div>
                <span style={this.decidecolor}>{this.showcounter()}</span>
            </div>
          );
    }
    showcounter(){
              const {count} = this.state;
              return count=== 0 ? "Zero" : count;
    }
    decidecolor(){
        return (this.state.count===0) ? style = {this.styles} : style = {this.styles1};
    }
}
 
export default Counter;