import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurf} from '../actions/index'
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      age:'',
      heigth:''
    }
  }
  componentDidMount(){
    this.props.getSmurf()
  }
  render() {
    return (
      <div className="App">
        {this.props.smurfs.map( smurf => (
       <div style={smurfInfo}>
         <p>Smurf name: {smurf.name}</p>
         <p>Smurf age: {smurf.age}</p>
         <p>Smurf height: {smurf.height}</p>
       </div>
     ))}

<form onSubmit={this.submitHandler}>
					<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} />
          <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange} />
          <input type="text" name="height" placeholder="height" value={this.state.height} onChange={this.handleChange} />
					<button type="submit">add smurf</button>
				</form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    smurfs: state.smurfs
  }
}
const mapDispatchToProps = {
  getSmurf:getSmurf
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

const smurfInfo = {

}