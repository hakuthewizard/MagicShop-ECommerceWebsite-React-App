import React from "react";
import './Input.css';

const Input = React.forwardRef((props, ref) => {
return (
    <input className="inputinput" ref={ref} {...props.input}/>
)
})
export default Input;