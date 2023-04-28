import React from 'react';
import Child from './Child';
export default class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Parent',
            count: 0
        }
        console.log('Parent - constructor')
    }

    componentDidMount(){
        console.log('Parent - componentDidMount')
        this.interval = setInterval(() =>{
            console.log('Parent - interval');
        },3000)
    }

    componentDidUpdate(){
        console.log('Parent - componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('Parent - componentWillUnmount')
        clearInterval(this.interval);
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