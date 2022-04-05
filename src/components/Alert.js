import React from 'react'

export default function Alert(props) {
    const capitalize = (message) => {
        return message.charAt(0).toUpperCase() + message.slice(1);
    }
    const style = {
        height: '50px'
    }
    return (
        <div style={style} className="mb-1">
            {props.alert && <div class={`alert alert-${props.alert.type}  fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}

            </div>}
        </div>)
}
