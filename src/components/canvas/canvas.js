import React from 'react';
import Bob from '../bob/bob';
import './style.css';

//canvas is a stateless component to display bubbles
class Canvas extends React.Component {
    render() {
        return (<div className="canvas"><Bob/></div>);
    }
}


export default Canvas;
