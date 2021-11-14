import { useEffect, useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function SideEffectBasics({ msg }) {

    const [st, setSt] = useState('SUCCESS')

    const [cal, setCal] = useState(1000)

    // use effect without dependencies array - called after every render
    // use effect with empty dependencies array - called after initial render 
    // use effect with dependency array - called when dependency changes

    useEffect(() => {
        document.title = `Basic Side Effect ${cal} ${st}`
    }, [cal, st])

    const onCalClick = () => {
        setCal(Date.now())
    }

    return (
        <Container>
            <Row>
                <Alert >
                    {msg} - {st} - {cal}
                </Alert>
            </Row>
            <Row>
                <Button onClick={() => setSt(`${Date.now()}`)}>Status</Button>
                <Button onClick={onCalClick}>Calculation</Button>
            </Row>
        </Container>
    )
}