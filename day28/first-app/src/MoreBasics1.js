export default function MoreBasics1() {

    const style = {
        border: '1px solid red'
    }
    const typ = 'text'

    const arr = [
        { nm: 'Android', logo: 'https://www.seekpng.com/png/detail/824-8249305_vector-royalty-free-download-flash-svg-outline-online.png' },
        { nm: 'iOS', logo: 'https://www.svgrepo.com/show/146382/online-job-search.svg' }
    ]

    const els = arr.map((item, index) => {
        return (
            <div className="row">
                <div className="col">
                    <img src={item.logo} style={{ width: 100, height: 100 }}></img>
                    <label>{item.nm}</label>
                </div>
            </div>
        )
    })

    return (
        <div className="container">
            {els}
        </div>
    )
}