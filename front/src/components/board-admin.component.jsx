import React, { Component } from 'react'
import UserService from '../services/user.service'
import CityService from '../services/city.service'
import PlaceService from '../services/place.service'
import authHeader from '../services/auth-header'
import Footer from './footer.component'
import './board-admin.component.scss'
import placeService from '../services/place.service'

const API_URL = 'http://localhost:8080/api/place'
export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddPlace = this.handleAddPlace.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.state = {
            listOfPlaces: [],
            listOfCities: [],
            successful: false,
            content: '',
            placeID: '',
            name: '',
            address: '',
            city: '',
            description: '',
            imageURL: '',
            category: '',

            lat: '',
            lng: '',
            URL: ''
        }
    }

    componentDidMount() {
        UserService.getAdminBoard().then(
            res => {
                this.setState({ content: res.data, successful: true })
            }, err => {
                this.setState({
                    content: (err.res && err.res.data && err.res.data.message)
                        || err.message
                        || err.toString()
                })
            }
        )
        CityService.getCity().then(
            res => {
                this.setState({ listOfCities: res.data })
            }
        )
        PlaceService.getPlace().then(
            res => {
                this.setState({ listOfPlaces: res.data })
            }
        )
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleAddPlace(e) {
        e.preventDefault();
        PlaceService.createPlace(
            this.state.placeID,
            this.state.name,
            this.state.description,
            this.state.address,
            this.state.city,
            this.state.category,
            this.state.imageURL,
            this.state.lat,
            this.state.lng,
            this.state.URL
        )
    }

    handleDelete(id) {
        PlaceService.deletePlace(id)
    }

    handleClear(placeID, name, address, city, description, imageURL, category, lat, lng, URL) {
        this.setState({ placeID: "", name: '', address: '', city: '', description: '', imageURL: '', category: '', lat: '', lng: '', URL: '' })
    }

    handleEdit(placeID, name, address, city, description, imageURL, category, lat, lng, URL) {
        this.setState({ placeID: placeID, name: name, address: address, city: city, description: description, imageURL: imageURL, category: category, lat: lat, lng: lng, URL: URL })
    }

    render() {
        const { successful } = this.state;
        return (
            <div className='admin-page'>
                <div className="top">
                    <div className="title">
                        {this.state.content}
                    </div>
                    {successful &&
                        <div className="row">
                            <div className="col-4">
                                <div className="input-form-place">
                                    <div className="place-form-title">
                                        Place Form
                                    </div>
                                    <form className="input-form" onSubmit={this.handleAddPlace}>
                                        <div className="input">
                                            <input type="text" placeholder='Please input place ID'
                                                name='placeID' value={this.state.placeID}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="text" placeholder='Please input name'
                                                name='name' value={this.state.name}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="text" placeholder='Please input address'
                                                name='address' value={this.state.address}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="text" placeholder='Please input city'
                                                name='city' value={this.state.city}
                                                onChange={this.handleChange.bind(this)}
                                            />

                                            <input type="text" placeholder='Please input image URL'
                                                name='imageURL' value={this.state.imageURL}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="text" placeholder='Please input category'
                                                name='category' value={this.state.category}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="number" placeholder='Please input latitude'
                                                name='lat' value={this.state.lat}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="number" placeholder='Please input longtitude'
                                                name='lng' value={this.state.lng}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                            <input type="text" placeholder='Please input place URL'
                                                name='URL' value={this.state.URL}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                        <div className="textarea">
                                            <textarea placeholder='Please input description'
                                                name='description' value={this.state.description}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>
                                    </form>

                                    <div className="button">
                                        <button className="submit" onClick={this.handleAddPlace}>
                                            <i class="fas fa-folder-plus"></i> Add
                                         </button>

                                        <button className="submit" onClick={this.handleClear}>
                                            <i class='fas fa-eraser'></i> Clear
                                        </button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-8">
                                <div className="place">
                                    {this.state.listOfPlaces.map(p => (

                                        <div className="card-deck">

                                            <div className="card">
                                                <div className="card-image">
                                                    <img src={p.images.url} alt="" />
                                                </div>
                                                <div className="card-body">
                                                    <strong>
                                                        {p.name}
                                                    </strong>

                                                    <p>
                                                        {p.description.substring(0, 60)}...
                                                    </p>

                                                </div>
                                                <div className="button">
                                                    <button className='update'
                                                        onClick={this.handleEdit.bind(this,
                                                            p.place_id,
                                                            p.name,
                                                            p.address,
                                                            p.city,
                                                            p.images.url,
                                                            // p.category, 
                                                            // p.lat, 
                                                            // p.lng, 
                                                            // p.URLs, 
                                                            // p.description
                                                        )}
                                                    >
                                                        <i class="fas fa-edit"></i> Edit
                                                    </button>

                                                    <button className="delete" onClick={this.handleDelete.bind(this, p._id)}>
                                                        <i class="fas fa-trash-alt"></i> Delete
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    ))}
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}