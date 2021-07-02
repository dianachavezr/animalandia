
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from'../../components/button/Buttom';

class Agenda extends Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
    }
  }
 
 onIncrementClick = (e)=> {
  e.preventDefault();
  this.setState(function(prevState){
    return{
      counter: prevState.counter +1
    }
  })
 };

onDecrementClick = (e) => {
  e.preventDefault();
  this.setState(function(prevState){
    return{
      counter: prevState.counter -1
    }
  })
};

onResetClick= (e)=>{
  e.preventDefault();
  this.setState({counter:0})
};

render(){
  return(
    <div className="App">
    <div className="counter">
    <div className="counter_state">
    {this.state.counter}
    </div>
    <div className="counter_buttons">
    <Button primary={true}
      handleClick={this.onIncrementClick}>
      +
      </Button>
      <Button primary={false} handleClick={this.onDecrementClick}>
      -
      </Button>

      <Button primary={true} handleClick={this.onResetClick}>
      Reset 
      </Button>
      </div>
      </div>
      </div>
    );
}

}
export default Agenda;