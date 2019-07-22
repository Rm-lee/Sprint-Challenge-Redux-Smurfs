import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getSmurf, addsmurf} from '../actions/index'
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
      height:''
    }
  }
  componentDidMount(){
    this.props.getSmurf()
  }
  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }


  submitHandler = (e) => {
    e.preventDefault()
    const {name,age,height} = this.state
    const newsmurf = {
      name,
      age,
      height
    }
    this.props.addsmurf(newsmurf)

  }
  render() {
    return (
      <div className="App">
        {this.props.smurfs.map( (smurf,index) => (
       <div key={index} style={smurfInfo}>
         <p>Smurf name: {smurf.name}</p>
         <p>Smurf age: {smurf.age}</p>
         <p>Smurf height: {smurf.height}</p>
       </div>
     ))}

        <form onSubmit={this.submitHandler}>
					<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange} /> <br/>
          <input type="text" name="age" placeholder="age" value={this.state.age} onChange={this.handleChange} /><br/>
          <input type="text" name="height" placeholder="height" value={this.state.height} onChange={this.handleChange} /><br/>
					<button type="submit">add smurf</button>
				</form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}
const mapDispatchToProps = {
  getSmurf:getSmurf,
  addsmurf:addsmurf
}
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(App)

const smurfInfo = {
  boxShadow:' 4px 2px 15px #cdcdcd',
  margin:'10px',
  padding:'10px',
}