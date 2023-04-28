import React from 'react';
import Child from './Child';
export default class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Parent',
            count: 0,
            count2: 0
        }
        console.log('Parent - constructor')
    }

    componentDidMount(){
        console.log('Parent - componentDidMount')
        this.interval = setInterval(() =>{
            console.log('Parent - interval');
        },3000)
    }

    componentDidUpdate(prevProps, prevState){
        // if we have multiple state
        if (this.state.count !== prevState.count) {
           console.log('parent - count-1 has changed')
          }
        if (this.state.count2 !== prevState.count2) {
            console.log('parent - count-2 has changed')
          }
          console.log('Parent - componentDidUpdate')
    }

    componentWillUnmount(){
        clearInterval(this.interval);
        console.log('Parent - componentWillUnmount')
    }
    render(){
        console.log('Parent - render')
        return(
            <div>
                <h2>This is {this.state.name} Component</h2>
                <h4>count: {this.state.count}</h4>
                <button onClick={() => this.setState({count: this.state.count+1})}>+</button>
                <Child name='child-one'/>
            </div>
        )
    }
}