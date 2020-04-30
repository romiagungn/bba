import React from 'react';

export default function Carousel(props) {
    return (
        <div className="header">

            <nav className="navbar navbar-expand-sm navbar-light fixed-top ">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <div className="row justify-content-center rw">
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link" href="/">Personal Storage</a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Business Storage</a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Why Us ? </a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Self-Storage Blog</a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Own A Self-Storage Facility</a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Contact Us</a>
                            </li>
                            <li className="nav-item garis-kanan">
                                <a className="nav-link " href="/">Reserve Online </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </nav>

            <div className="container-fluid fluid">
                <div className="row justify-content-center rw">
                    <div className="col-6">
                        <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="..." className="img-thumbnail" />
                    </div>
                    <div className="align-self padding0">
                        <div className="row rw align-self-start padding1 mr-0">
                            <div className="col-4 padding0 pr-1">
                                <select className="custom-select service-small" >
                                    <option className="service-small" >United States</option>
                                </select>
                            </div>
                            <div className="col-4 padding0">
                                <select className="custom-select service-small" id="inlineFormCustomSelectPref">
                                    <option className="service-small" >EN</option>
                                </select>
                            </div>
                            <div className="col-4 padding0 " align="center">
                                <i className="fab fa-facebook-f fa-lg mt-2 ml-2"></i>
                                <i className="fab fa-twitter fa-lg mt-2"></i>
                                <i className="fab fa-google-plus-g fa-lg mt-2 " ></i>
                            </div>
                        </div>

                        <div className="align-self-end padding0">
                            <p className="text-p"> Make Our Space Your Space  <i className="fab fa-whatsapp fa-lg ml-2"></i> +852 8202 0811</p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}