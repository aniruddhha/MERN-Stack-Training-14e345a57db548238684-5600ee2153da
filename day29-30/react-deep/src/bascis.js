import React from 'react';

export class MyApp extends React.Component {
    render() {
        return (
            <div>
                <h1>This is class based Component</h1>
            </div>
        )
    }
}

export function Dapp() {
    return <p> affjlsjlfd </p>
}

export function App() {
    return (
        <div>
            <Dapp></Dapp>
            <MyApp></MyApp>
            <h1>This is h1</h1>
        </div>
    )
}