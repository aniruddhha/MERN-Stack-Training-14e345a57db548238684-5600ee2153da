import { useEffect } from 'react';

import Alert from 'react-bootstrap/Alert';

export default function SideEffectBasics({ msg }) {

    useEffect(() => {
        document.title = 'Basic Side Effect'
    })

    return (
        <Alert >
            {msg}
        </Alert>
    )
}