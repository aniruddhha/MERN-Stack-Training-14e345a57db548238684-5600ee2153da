import { useState } from 'react'

const MoreOfState = () => {

    const [dt, setDt] = useState(10)

    const onClk = () => {

        setTimeout(() => {
            setDt(prevVal => {
                console.log(`Previous ${prevVal}`)
                return 200
            })
        }, 1500)

        setDt(400)

        setDt(pv => {
            if (pv < 100) return 200
            return 600
        })
    }

    return (
        <div>
            <h1>More on States {dt}</h1>

            <button onClick={onClk}>Okay</button>
        </div>
    )
}

export default MoreOfState
