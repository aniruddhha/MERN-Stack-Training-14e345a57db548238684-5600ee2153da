import React from 'react';

export class MobileButton extends React.Component {

    x = 10

    constructor() {
        super()
        this.btClk = this.btClk.bind(this)
    }

    btClk() {
        console.log(this)
    }

    render() {
        return (
            <div>
                <input type="button" value="Okay" onClick={this.btClk} />
            </div>
        )
    }
}