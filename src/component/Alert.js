import React from "react";

const Alert = (props) => {
    const capitalize = (word)=>{
        if(word ==="danger"){
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toLowerCase() + lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role='alert'>
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
    )
}

export default Alert