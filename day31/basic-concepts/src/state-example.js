import { useState } from 'react'

const StateExampleOne = () => {

    const [files, setFiles] = useState([
        { fid: 1, nm: 'android.txt', sz: 100, pt: '/home/hello' },
        { fid: 2, nm: 'apple.png', sz: 600, pt: '/home/dt' },
        { fid: 3, nm: 'resume.pdf', sz: 1000, pt: '/home/edu' },
    ])

    const onRemove = (fl) => {
        console.log(fl)

        const filtered = files.filter(f => f.fid != fl.fid)
        setFiles(f => {
            return filtered
        })
        console.log(files)
    }

    const fileItems = files.map(fl => {
        return <li key={fl.fid} className="row">
            <div className="col">{fl.nm} </div>
            <div className="col">
                <input type="button" className="btn btn-sm btn-primary" value="Remove" onClick={() => onRemove(fl)} />
            </div>
        </li>
    })

    return (
        <div className="container">
            <ul>{fileItems}</ul>
        </div>
    )
}

export default StateExampleOne