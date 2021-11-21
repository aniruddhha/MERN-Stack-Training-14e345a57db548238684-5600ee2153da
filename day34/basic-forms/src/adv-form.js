
import React, { useState } from 'react'

function CountrySelect() {
    return (
        <select>

        </select>
    )
}

export default function AdvForm1() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [country, setCountry] = useState('')

    const onUserNameChanged = (e) => {
        setUserName(e.target.value)
    }

    const onPasswordChanged = (e) => {
        setPassword(e.target.value)
    }

    const onCountryChanged = (e) => {
        setCountry(e.target.value)
    }

    const countries = ['India', 'Japan', 'Chiana']

    const countryOptions = countries.map(cntry => {
        return (
            <option value={cntry} key={cntry}>
                {cntry}
            </option >
        )
    })

    const onFormSubmitted = (e) => {
        e.preventDefault()

        console.log(`Form Submitted`)
        console.log(userName, password, country)
    }

    return (
        <>
            <form onSubmit={onFormSubmitted}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={userName} onChange={onUserNameChanged} />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={onPasswordChanged} />
                </div>

                <div>
                    <label>Country</label>
                    <select onChange={onCountryChanged}>
                        {countryOptions}
                    </select>
                </div>

                <div>
                    <input type="submit" />
                </div>
            </form>
        </>
    )
}
