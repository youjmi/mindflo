import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Button = (props) => {
    return (
        <div>
            <Button className="btn">{props.children}</Button>
        </div>
    )
}

export default Button
