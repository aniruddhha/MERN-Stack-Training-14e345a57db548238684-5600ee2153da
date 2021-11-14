
import { ErrorComponent } from "./parts-conditions"
import { SuccessComponent } from "./parts-conditions"

export default function ShortCircuit() {

    const text = 'android'
    const opAnd = text && ' os'
    const opOr = text || ' os'

    return (
        <div>
            <div>
                {text && <SuccessComponent />}
            </div>
            <div>
                {text || <ErrorComponent />}
            </div>
        </div>
    )
}