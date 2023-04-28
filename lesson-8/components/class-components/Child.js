import React from 'react';
export default class Child extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Child',
            count: 0
        }
        console.log('Child - constructor')
    }

    componentDidMount(){
        console.log('Child - componentDidMount')
    }

    componentDidUpdate(){
        console.log('Child - componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('Child - componentWillUnmount')
        clearInterval(this.interval);
    }
    render(){
        console.log('Child - render')
        return(
            <div>
                <h2>This is {this.state.name} Component</h2>
                <p>This is child props: {this.props.name}</p>
            </div>
        )
    }
}