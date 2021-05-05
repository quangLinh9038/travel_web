import React, { Component } from 'react'
import { Switch, Route, Link, Redirect } from "react-router-dom";

export class Places extends Component {
    render() {
        const { listOfPlaces, loading } = this.props;

        if (loading) {
            return <h2>Loading...</h2>
        }

        return (
            <div className="place">
                {listOfPlaces.map(p => (
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-image">
                                <Link to={`/detail/${p._id}`}>
                                    <img src={p.images.url} alt="" />
                                </Link>
                            </div>
                            <div className="card-body">
                                <strong>
                                    {p.name}
                                </strong>

                                <p>
                                    {p.description.substring(0, 60)}...
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Places