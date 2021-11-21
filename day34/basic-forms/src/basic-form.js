
import { useState } from 'react'

export default function BasicForm() {

    const [something, setSomething] = useState('')

    const onSomethingChanged = (ev) => {
        console.log(ev)
        setSomething(ev.target.value)
    }

    return (
        <>
            <form>
                <input
                    type="text"
                    value={something}
                    onChange={onSomethingChanged}
                />
            </form>
        </>
    )
}