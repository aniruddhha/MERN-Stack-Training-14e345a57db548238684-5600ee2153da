
import React, { useState } from 'react'

function CountrySelect() {
    return (
        <select>

        </select>
    )
}

export default function AdvForm1() {

    const countries = ['India', 'Japan', 'Chiana']

    const countryOptions = countries.map(country => {
        return (
            <option value={country} key={country}>
                {country}
            </option >
        )
    })

    const onFormSubmitted = (e) => {
        e.preventDefault()

        console.log(`Form Submitted`)
    }

    return (
        <>
            <form onSubmit={onFormSubmitted}>
                <div>
                    <label>User Name</label>
                    <input type="text" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>

                <div>
                    <label>Country</label>
                    <select>
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
