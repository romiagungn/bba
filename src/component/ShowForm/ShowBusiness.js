import React, { Component } from 'react';

export default class Body extends Component {

    render() {
        return (
            <div className="container-fluid padding0">
                <div className="row rw">

                    <ul className="list-group col-md-4 col-md-4 col-sm-12-12 pr-0">
                        <li className="list-group-item">Business Friendly Self-Storage</li>
                        <li className="list-group-item">Storage with Flexible Rent Period</li>
                        <li className="list-group-item">Storage For Achiving</li>
                        <li className="list-group-item">Storage for E-commerce Business</li>
                        <li className="list-group-item">Storage of Stock/Sales Materials</li>
                        <li className="list-group-item">Use Self-Storage as Your Integrated Distribution Hub</li>
                        <li className="list-group-item">Online Bill Payment</li>
                        <li className="list-group-item">Security</li>
                        <li className="list-group-item">Access Hours</li>
                        <li className="list-group-item">Office Opening Hours</li>
                    </ul>

                    <main className="col-md">
                        <div className="row bg-white pt-2 pl-2 pr-2 pb-1 align-self-center">
                            <div className="col-md-6 col-sm-12">
                                <h1>Business Friendlyy self-Storage</h1>
                                <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut
                                semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave
                                    meditation.</p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="..." className="img-thumbnail" />
                            </div>
                        </div>

                        <div className="row bg-white pl-2 pr-2">
                            <div className="col-md-6 col-sm-12">
                                <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut
                                        semiotics, raw denim deep v taxidermy messenger bag.</p>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card radius">
                                    <div className="card-header">
                                        50% Discount Offer
                                            </div>
                                    <div className="card-body pl-0">
                                        <div className="row rw">
                                            <div className="col-8 ">
                                                <select className="custom-select my-1 mr-sm-2 service-small" >
                                                    <option className="service-small" >Select ...</option>
                                                    <option className="service-small" >United States</option>
                                                    <option className="service-small" >English</option>
                                                </select>
                                            </div>
                                            <div className="col-4">
                                                <input type="button" className="btn d-block btn-free" value=" Find >" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row bg-white pl-2 pr-2 align-self-end">
                            <div className="col-md-6 col-sm-12">
                                <div className="card radius">
                                    <div className="card-header">
                                        50% Discount Offer
                                            </div>
                                    <div className="card-body">
                                        <h5 className="card-title">For Up to 4 weeks with a 6 month contact</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="card radius">
                                    <div className="card-header">
                                        50% Discount Offer
                                            </div>
                                    <div className="card-body">
                                        <h5 className="card-title">For Up to 4 weeks with a 6 month contact</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>

            </div>
        )
    }
}