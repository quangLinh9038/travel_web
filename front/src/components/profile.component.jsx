import React, { Component } from 'react'
import AuthService from '../services/auth.service'

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: AuthService.getCurrentUser()
        }
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className='container'>
                <header className='jumbotron'>
                    <h3>
                        <strong>{currentUser.username}</strong>
                    </h3>
                </header>
                <p>
                    <strong>Token:</strong>{" "}
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>

                <p>
                    <strong>ID:</strong>{" "}
                    {currentUser.id}
                </p>

                <strong>Authorities:</strong>
                <ul>
                    {currentUser.roles && currentUser.roles.map((role, i) =>
                        <li key={i}>
                            {role}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

