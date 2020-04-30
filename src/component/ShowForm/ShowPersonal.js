import React, { Component } from 'react';
import Carousel from '../Carousel';

export default class Body extends Component {

    render() {
        return (
            <div>
                <div className="cb">
                    <div className="tab-pane fade show">
                        <div className="row pt-4 pb-3">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <h1 className="paddingcek">Find Your Nearest Your Space</h1>
                                <ul className="list-unstyled text-small">
                                    <div className="row rw paddingcek">
                                        <div className="col-7 padding0">
                                            <select className="custom-select my-1 mr-sm-2 service-small" >
                                                <option className="service-small" >Select ...</option>
                                                <option className="service-small" >United States</option>
                                                <option className="service-small" >English</option>
                                            </select>
                                        </div>
                                        <div className="col-5">
                                        <button type="button" className="btn btn-free">Find ></button>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <h1>Storing personal items</h1>
                                <li className="mt-1">I'm Moving Home</li>
                                <li className="mt-1">I'm Renovationg my Home</li>
                                <li className="mt-1">I Need Extra Space at Home</li>
                                <li className="mt-1">I need Temporary Storage</li>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 padding-btn">
                                <input type="button" className="btn  d-block mr-3 ml-auto" value=" Storage Calculator >" />
                                <input type="button" className="btn  d-block mt-2 mr-3 ml-auto" value=" Get Your Quote >" />
                                <input type="button" className="btn  d-block mt-2 mr-3 ml-auto" value=" Reserve Your Space >" />
                            </div>
                        </div>
                        <Carousel />
                    </div>
                </div>

                <div className="row rw pt-3">
                    <div className="card col-xs-12 col-sm-6 col-md-3 pb" >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Your Promotions</h5>
                            <p className="card-text">Find out how much you can save on you lease.</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-3 pb" >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1575310866542-778bdb501c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Your Packaging</h5>
                            <p className="card-text">Buy Your Boxex and packagaing materials here.</p>
                        </div>
                    </div>
                    <div className="clearfix visible-xs-block"></div>
                    <div className="card col-xs-12 col-sm-6 col-md-3 pb" >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1563434487524-c308d051168c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Your Bill Payment</h5>
                            <p className="card-text">Pay the bill for your current storage rental online.</p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-3 bc pl-0 pr-0" >
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">Your Nearest Store</h5>
                            <p className="card-text">Find Where our stores are located in country.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}