import React, { Component } from "react";
import UserService from '../services/user.service'
import './home.component.scss'
import Footer from './footer.component'
const url = 'https://www.youtube.com/embed/xLDM6ukEMtc?autoplay=1&mute=1&controls=0&playlist=xLDM6ukEMtc&loop=1'
export default class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         content: ''
    //     }
    // }

    // componentDidMount() {
    //     UserService.getPublicContent().then(
    //         res => {
    //             this.setState({ content: res.data })
    //         }, error => {
    //             this.setState({
    //                 content: (error.res && error.res.data) || error.message || error.toString()
    //             })
    //         }
    //     )
    // }

    render() {
        return (
            <div>
                <div className='video'>
                    <iframe className='introvideo' src={url} allowFullScreen></iframe>
                    <div className='subtitle'>
                        Made possible by VNomad
                    </div>
                </div>

                <div className='content'>
                    <strong>Gallery</strong>

                    <div className="picture">
                        <div className='pic-content'>
                            <div class="polaroid rotate_left">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                            <div class="polaroid rotate_right">
                                <img src="https://images.unsplash.com/photo-1535952548450-d7447587e733?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">The Landmark 81, Ho Chi Minh City.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_right">
                                <img src="https://images.unsplash.com/photo-1575986767340-5d17ae767ab0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">Ha Long Bay, Quang Ninh Province. One of The Seven Wonder. </p>
                            </div>
                            <div class="polaroid rotate_left">
                                <img src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">Ha Long Bay, Quang Ninh Province. One of The Seven Wonder. </p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_left">
                                <img src="https://images.unsplash.com/photo-1601108644994-1e450e786d3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1076&q=80" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">Xich Lo, Ha Noi Capital.</p>
                            </div>
                            <div class="polaroid rotate_right">
                                <img src="https://images.unsplash.com/photo-1526675094705-751b333fad0c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">Ha Noi Street - Busy and crowded.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_right">
                                <img src="https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">Den Long, Hoi An Ancient Town, Quang Nam Province.</p>
                            </div>
                            <div class="polaroid rotate_left">
                                <img src="https://images.unsplash.com/photo-1565065527344-0cad9b61a9dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">Thu Bon River, Hoi An, Quang Nam Province.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_left">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                            <div class="polaroid rotate_right">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_right">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                            <div class="polaroid rotate_left">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_left">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                            <div class="polaroid rotate_right">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                        </div>

                        <div className='pic-content'>
                            <div class="polaroid rotate_right">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Monterosso al Mare" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                            <div class="polaroid rotate_left">
                                <img src="https://image.arrivalguides.com/415x300/07/383a0d1a2c0e71e9aece7e2629324b77.jpg" alt="Pulpit rock" width="284" height="213" />
                                <p class="caption">The Bitexco Tower, Ho Chi Minh City.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>



        )
    }
}