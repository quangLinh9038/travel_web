import React, { Component } from 'react'
import CityService from '../services/city.service'
import PlaceService from '../services/place.service'
import './plan.component.scss'
import Footer from './footer.component'
import { json } from 'body-parser'
import Loading from './loading.component'


const urlPlace = 'http://localhost:8080/api/place'
export default class Plan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfCities: [],
            listOfPlaces: [],
            input: '',
            cityID: '',
            loading: false,
        }
    }

    componentDidMount() {
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
        this.filterByCity()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    search() {

    }

    filterByCity() {
        this.setState({ loading: true })
        fetch(urlPlace)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.city == this.state.cityID)
                this.setState({ listOfPlaces: data })
            })
        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="plan-page">
                <div className="top">
                    <div className="title">
                        <h1>Get with us and get away</h1>
                    </div>
                    <div className="searchbar">
                        <form className='search-form'>
                            <button className="submit">
                                <i className="fa fa-search"></i>
                            </button>
                            <input type="text" placeholder='Search for a destination'
                                name='input' value={this.state.input}
                                onChange={this.handleChange.bind(this)}
                            />
                        </form>
                    </div>
                    <div className="city">
                        {this.state.listOfCities.map(p => (
                            <ul className="list-of-city">
                                <li onClick={this.filterByCity.bind(this)}>

                                    <strong className='city' onClick={() => {
                                        this.setState({ cityID: p._id })
                                    }}>
                                        {p.name}
                                    </strong>

                                </li>
                            </ul>
                        ))}
                    </div>

                    <div className="place">
                        {this.state.listOfPlaces.map(p => (

                            <div className="card-deck">
                                {loading ? <Loading/>
                                    : <div className="card">
                                        <div className="card-image">
                                            <img src={p.images.url} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <strong>
                                                {p.name}
                                            </strong>

                                            <p>
                                                {p.description.substring(0, 60)}...
                                            {/* {p.description.substr(p.description.length - 30)} */}
                                            </p>
                                        </div>
                                    </div>
                                }
                            </div>

                        ))}
                    </div>
                </div>

                <div className="bottom">
                    <Footer />
                </div>

            </div>
        )
    }
}