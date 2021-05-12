import React, { Component } from 'react'
import Footer from './footer.component'
import './detailPlace.component.scss'
import PlaceService from '../services/place.service'
import CityService from '../services/city.service'
import { GoogleMap } from './google-map.component'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// AIzaSyB5l825tRVdGi22ObjlkYF890s6ME2XSD8

export default class DetailPlace extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfCities: [],
            listOfPlaces: [],
            placeID: '',
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {}
        }
    }

    componentDidMount() {
        PlaceService.getPlace().then(
            res => {
                this.setState({ listOfPlaces: res.data })
            }
        )
        CityService.getCity().then(
            res => {
                this.setState({ listOfCities: res.data })
            }
        )
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    render() {
        const { inforwindow } = this.state;
        return (
            <div className='detail-page'>
                <div className="row">
                    <div className="col-6">
                        {this.state.listOfPlaces.filter(f => f._id == this.props.match.params._id).map(p => (
                            <ul>
                                <li class='image'>
                                    <img src={p.images.url} alt="" />
                                </li>

                                <li>
                                    <div className="place">
                                        {p.name}
                                    </div>

                                </li>

                                <li>
                                    <div className="category">
                                        <div className="city">
                                            {this.state.listOfCities.filter(f => f._id == p.city).map(q => (
                                                <button>
                                                    <i class="fas fa-map-marker-alt"></i>
                                                    {q.name}
                                                </button>
                                            ))}
                                        </div>
                                        <button>
                                            {p.category}
                                        </button>
                                    </div>
                                </li>

                                <li>
                                    <div className="description">
                                        {p.description}
                                    </div>
                                </li>

                                <li>
                                    <div className="latlng">
                                        <div className="lat">
                                            <strong>Latitute:</strong>
                                            {p.lat}

                                        </div>

                                        <div className="lng">
                                            <strong>Longtitute:</strong>
                                            {p.lng}
                                        </div>

                                    </div>
                                </li>

                                <li>
                                    <div className="address">
                                        <i class="fas fa-map-marker-alt"></i>
                                        {p.address}
                                    </div>
                                </li>

                                <li>
                                    <div className="url">
                                        <i class="fas fa-link"></i>
                                        <a href={p.URLs} target='_blank'>
                                            {p.URLs}
                                        </a>
                                    </div>

                                </li>
                            </ul>
                        ))}
                    </div>

                    <div className="col-5">
                        {this.state.listOfPlaces.filter(f => f._id == this.props.match.params._id).map(p => (
                            <Map
                                google={this.props.google}
                                zoom={14}
                                initialCenter={
                                    {
                                        lat: p.lat,
                                        lng: p.lng
                                    }
                                }
                            >

                                <Marker onClick={this.onMarkerClick} />

                                <InfoWindow marker={this.state.activeMarker}
                                    visible={this.state.showingInfoWindow}
                                    onClose={this.onClose}
                                >
                                    <div>
                                        <strong>NAME: </strong> {p.name}
                                        <br />
                                        <strong>LOCATION: </strong> {p.address}
                                        <br />
                                        <strong>LAT: </strong> {p.lat}
                                        <br />
                                        <strong>LNG: </strong> {p.lng}
                                        <br />
                                    </div>
                                </InfoWindow>

                            </Map>
                        ))}

                    </div>


                </div>

            </div>
        )
    }
}

DetailPlace = GoogleApiWrapper({
    apiKey: ("AIzaSyB5l825tRVdGi22ObjlkYF890s6ME2XSD8")
})(DetailPlace);
