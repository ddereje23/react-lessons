const root = ReactDOM.createRoot(document.getElementById('root'));

let heading1 = React.createElement('h1', {
    id: 'heading-1',
    style: {textAlign: 'center'},
}, 'Hello World');

let heading2 = React.createElement('h1',
    {
        id: 'heading-1',
        style: {color: "red", textAlign: 'center'},
    }, 'This is test');

let container = React.createElement('div',
    {
        id: 'container',
    }, [heading1, heading2]);


root.render(container)