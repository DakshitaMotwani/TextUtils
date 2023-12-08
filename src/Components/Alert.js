import React from 'react'

function Alert(props) {
  return (
    props.alert && <div className="alert alert-success" role="alert">
        <strong>{props.alert.msg}</strong>
   </div>
  )
}

export default Alert
