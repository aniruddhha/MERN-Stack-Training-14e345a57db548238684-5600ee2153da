
import { useState } from 'react'

export default function BasicsOfState() {

    let dt = 10
    const arr = useState(20)

    const onClk = () => {
        console.log(`jello`)
        console.log(`jello`)
        console.log(useState)
        console.log(arr)
        console.log(`Before ${dt}`)
        dt = 20
        arr[1](500)
        console.log(`After ${dt}`)
    }

    return (
        <div>
            <div>
                <h1> This is title {arr[0]} </h1>
                <div>
                    <input type="button" value="Okay" onClick={onClk} />
                </div>
            </div >
        </div>
    )
}