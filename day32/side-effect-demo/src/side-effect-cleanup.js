import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';

export default function WindowSizeText() {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const onWindowChanged = (event) => {
        setWidth(event.target.innerWidth)
        setHeight(event.target.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', onWindowChanged)
        return () => window.removeEventListener('resize', onWindowChanged)
    },[])

    return (
        <Container>
            <Row>
                Width = {width}, Height = {height}
            </Row>
        </Container>
    )
}