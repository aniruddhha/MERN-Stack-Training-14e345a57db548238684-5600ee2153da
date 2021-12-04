
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

    const [frmDt, setFormData] = useState({ userName: '', password: '', country: '' })

    const set = name => {
        return ({ target: { value } }) => {
            setFormData(oldValues => ({ ...oldValues, [name]: value }));
        }
    };

    const onUserNameChanged = (e) => {
        //setUserName(e.target.value)

        // setFormData(frm => ({ ...frm, userName: e.target.value }))
    }

    const onPasswordChanged = (e) => {
        //setPassword(e.target.value)

        // setFormData(frm => ({ ...frm, password: e.target.value }))
    }

    const onCountryChanged = (e) => {
        //setCountry(e.target.value)

        // setFormData(frm => ({ ...frm, country: e.target.value }))
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
        // console.log(userName, password, country)
        console.log(frmDt)
    }

    return (
        <>
            <form onSubmit={onFormSubmitted}>
                <div>
                    <label>User Name</label>
                    <input type="text" value={frmDt.userName} onChange={set('userName')} required />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" value={frmDt.password} onChange={set('password')} required />
                </div>

                <div>
                    <label>Country</label>
                    <select onChange={set('country')}>
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
