import React, { Component } from "react";
import Carousel from './Carousel';
import ShowPersonal from './ShowForm/ShowPersonal'
import ShowBusiness from './ShowForm/ShowBusiness'


export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { showPersonal: false, showBusiness: false };
    }

    showBusiness() {
        return (
            <div className="body myTab">
                <div className="row rw" >
                    <div className="card col-xs-12 col-md-12" id="myTab">
                        <a className="pt-3 pb-3" type="button" onClick={() => this.setState({ showPersonal: false, showBusiness: false })} id="profile-tab" href="#profile">
                            <h1>Business Storage</h1>
                            <div className="row rw">
                                <div className="col-xs-12 col-sm-4 col-md-4 padding0">
                                    <p>Create More space in your place of business, simply request a quote now.</p>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 " align="right">
                                    <button type="button" className="btn btn-color btn-sm" >Storage Calculator > </button>
                                </div>
                                <div className="col-xs-12 col-sm-4 col-md-4 padding-btn" >
                                    <button type="button" className="btn btn-color btn-sm">Reserve Your Space > </button>
                                </div>
                            </div>
                        </a>
                    </div>
                    <ShowBusiness />
                </div>
            </div>
        )
    }

    showPersonal() {
        return (

            <div className="body">
                <div className="row rw" >
                    <div className="card col-xs-12 col-sm-6 col-md-6 padding" id="myTab">
                        <a className="pt-3 active" type="button" onClick={() => this.setState({ showPersonal: false, showBusiness: false })} id="home-tab" href="#profile">
                            <h1>Personal Storage</h1>
                            <p>Find Out more about storing personal items and how to reserve a storage room online</p>
                        </a>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-6 padding" id="myTab">
                        <a className="pt-3" type="button" onClick={() => this.setState({ showPersonal: false, showBusiness: true })} id="profile-tab" href="#profile">
                            <h1>Business Storage</h1>
                            <p>Create More space in your place of business, simply request a quote now.</p>
                        </a>
                    </div>
                    <ShowPersonal />
                </div>
            </div>
        );
    }

    render() {
        // console.log(this.state)
        return (
            <div className="body">
                {!this.state.showPersonal && !this.state.showBusiness && (
                    <div className="body">
                        <div className="row rw" >
                            <div className="card col-xs-12 col-sm-6 col-md-6 padding" id="myTab">
                                <a className="pt-3" type="button" onClick={() => this.setState({ showPersonal: true })} id="home-tab" href="#profile">
                                    <h1>Personal Storage</h1>
                                    <p>Find Out more about storing personal items and how to reserve a storage room online</p>
                                </a>
                            </div>
                            <div className="card col-xs-12 col-sm-6 col-md-6 padding" id="myTab">
                                <a className="pt-3" type="button" onClick={() => this.setState({ showBusiness: true })} id="profile-tab" href="#profile">
                                    <h1>Business Storage</h1>
                                    <p>Create More space in your place of business, simply request a quote now.</p>
                                </a>
                            </div>
                        </div>
                        <Carousel />

                        <div className="border-tipis">
                            <p className="">
                                <button type="button" className="btn  d-block mr-3 ml-auto" value="  >"> Storage Calculator </button>
                            </p>
                            <p className="">
                                <button type="button" className="btn  d-block mr-3 ml-auto" value=" >" > Reserve Your Space </button>
                            </p>
                        </div>

                        <div className="row rw">
                            <div className="card card col-xs-12 col-sm-6 col-md-3 pb" >
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Your Promotions</h5>
                                    <p className="card-text">Find out how much you can save on you lease.</p>
                                </div>
                            </div>
                            <div className="card card col-xs-12 col-sm-6 col-md-3 pb" >
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1575310866542-778bdb501c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Your Packaging</h5>
                                    <p className="card-text">Buy Your Boxex and packagaing materials here.</p>
                                </div>
                            </div>
                            <div className="card card col-xs-12 col-sm-6 col-md-3 pb" >
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1563434487524-c308d051168c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Your Bill Payment</h5>
                                    <p className="card-text">Pay the bill for your current storage rental online.</p>
                                </div>
                            </div>
                            <div className="card card col-xs-12 col-sm-6 col-md-3 bc pl-0 pr-0" >
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80" alt="Card cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Your Nearest Store</h5>
                                    <p className="card-text">Find Where our stores are located in country.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
                {this.state.showPersonal ? this.showPersonal() : null}
                {this.state.showBusiness ? this.showBusiness() : null}
            </div>

        );
    }
}