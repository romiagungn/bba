import React from "react";

export default function Carousel(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner text-center">
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=680&q=80" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block align-items-center justify-content-center">
                        <h1>Delicious</h1>
                        <h3>Cake is our signature product.</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1575310866542-778bdb501c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block align-items-center justify-content-center">
                        <h1>Delicious</h1>
                        <h3>Cake is our signature product.</h3>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1563434487524-c308d051168c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block align-items-center justify-content-center">
                        <h1>Delicious</h1>
                        <h3>Cake is our signature product.</h3>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}