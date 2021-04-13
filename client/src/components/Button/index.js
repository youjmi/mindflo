import React from 'react'
import { Button } from 'react-bootstrap'

const Button = (props) => {
    return (
        <div>
            <Button>{props.children}</Button>
        </div>
    )
}

export default Button
