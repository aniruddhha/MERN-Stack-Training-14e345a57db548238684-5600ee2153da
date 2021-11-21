import React from 'react';
import { Alert } from 'react-bootstrap'
import { useState } from 'react';
import { Row } from 'react-bootstrap';

function FragmentDemoComponent(props) {
    return (
        <>
            <div>
                {props.children}
            </div>
            <div>
                Hello
            </div>
            <div>
                Hi
            </div>
        </>
    )
}


function MyAlertComponent() {
    const variant = 'primary'
    const [visibility, setVisibility] = useState(true)

    return (
        visibility && (
            <Alert variant={variant} onClose={() => setVisibility(false)} dismissible>
                This is a {variant} alert—check it out!
            </Alert>
        )
    )
}

export default function ConditionalRenderingExample() {
    return (
        <FragmentDemoComponent>
            <div> This is outside content</div>
        </FragmentDemoComponent>
    )
}