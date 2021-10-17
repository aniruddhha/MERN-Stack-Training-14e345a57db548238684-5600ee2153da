import React, { Component } from 'react';

export default class IotApp extends Component {
    render() {
        return (
            <p className="alert alert-info">
                First off, custom events don't play well with React components natively. So you cant just say in the render function, and have to think around the problem.
            </p>
        );
    }
}