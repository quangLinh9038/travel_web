import React, { Component } from 'react'
import AuthService from '../services/auth.service'
import './profile.component.scss'
import Footer from './footer.component'

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
            <div className='profile'>
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img src="https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg" alt="" />
                            <div className="card-header">
                                <h2>
                                    <strong>{currentUser.username}</strong>
                                </h2>
                            </div>

                            <div className="container">
                                <p>
                                    <strong>Token:</strong>{" "}
                                    {currentUser.accessToken.substring(0, 15)} ...{" "}
                                    {currentUser.accessToken.substr(currentUser.accessToken.length - 10)}
                                </p>

                                <p>
                                    <strong>ID:</strong>{" "}
                                    {currentUser.id}
                                </p>


                                <ul>
                                    <strong>Authorities:</strong>
                                    {currentUser.roles && currentUser.roles.map((role, i) =>
                                        <li key={i}>
                                            {role}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">

                    </div>
                </div>
                <Footer />
            </div>

        )
    }
}

