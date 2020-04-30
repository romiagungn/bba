import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Box extends Component {
    render() {
        return (
            <div className="container">

                <Header />
                <Body />
                <Footer/>

            </div >
        );
    }
}