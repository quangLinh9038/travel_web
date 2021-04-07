import React, { Component } from 'react'
import UserService from '../services/user.service'

export default class Guest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        UserService.getGuestBoard().then(
            res => {
                this.setState({ content: res.data })
            }, err => {
                this.setState({
                    content: (err.res && err.res.data && err.res.data.message)
                        || err.message
                        || err.toString()
                })
            }
        )
    }

    render(){
        return(
            <div className='container'>
                <h3>{this.state.content}</h3>
            </div>
        )
    }
}