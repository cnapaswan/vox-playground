import React from 'react';
import Bob from '../bob/bob';
import './style.css';
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    canvas: {
      backgroundColor: 'mistyrose',
    }
})

class Canvas extends React.Component {
    CanvasElem = () => {
        const classes = useStyles()
        return (
          <div className={classes.myCanvas}>
              <Bob />
          </div>
        )
    }

    debugger;
    
    render() {
        return this.getCanvasElem();
    }
}
export default Canvas;
