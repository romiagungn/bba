import React from 'react';


export default function Footer(props) {
    return (

        <div className="footer">
            <footer>
                <div className="row ml-0">
                    <div className="col-6 col-md">
                        <h5>Your Space</h5>
                        <ul className="list-unstyled text-small">
                            <li><p className="text-muted">What is self-storage ?</p></li>
                            <li><p className="text-muted">Your Promotions</p></li>
                            <li><p className="text-muted">Your Packaging</p></li>
                            <li><p className="text-muted">Your Bill Payment</p></li>
                            <li><p className="text-muted">FAQ</p></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Personal Storage</h5>
                        <ul className="list-unstyled text-small">
                            <li><p className="text-muted">I'm Moving Home</p></li>
                            <li><p className="text-muted">I'm Renovating my home</p></li>
                            <li><p className="text-muted">I need extra space at home</p></li>
                            <li><p className="text-muted">I need temporary storage</p></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Business Storage</h5>
                        <ul className="list-unstyled text-small">
                            <li><p className="text-muted">Storage for Archiving</p></li>
                            <li><p className="text-muted">Storage for e-commerce</p></li>
                            <li><p className="text-muted">Business</p></li>
                            <li><p className="text-muted">Storage of stock/sales materials</p></li>
                            <li><p className="text-muted">Use self-storage as your integrated distribution hub</p></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <h5>Why Us ?</h5>
                        <ul className="list-unstyled text-small">
                            <li><p className="text-muted">Storage with flexible rent period</p></li>
                            <li><p className="text-muted">Business friendly self-storage</p></li>
                            <li><p className="text-muted">Security</p></li>
                            <li><p className="text-muted">Office Opening</p></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md">
                        <ul className="list-unstyled text-small">
                            <li><p className="bold">Self-Storage Blog</p></li>
                            <li><p className="bold">Own A self-Storage</p></li>
                            <li><p className="bold">Abaout Us</p></li>
                            <li><p className="bold">Contact Us</p></li>
                            <li><p className="bold">Reserve Online</p></li>
                        </ul>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12">
                    <p className="psize">Terms And Conditions | Privacy Policy | Sitemap</p>
                </div>
            </footer>
        </div>
    )
}