import React from 'react'
import Navbar from './Navbar'

const Home = () => {
    return (
        <div>

            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br /><br /><br /><br />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <div id="carouselExampleCaptions" class="carousel slide">
                                    <div class="carousel-indicators">
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="https://i0.wp.com/fottam.com/wp-content/uploads/2023/10/KSRTC-old-classic-super-fast-Thottilpalam-MC-road-scaled.jpg?w=2560&ssl=1" class="d-block w-100" alt="Bus 1" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Bus Model 1</h5>
                                                <p>Our Bus Model 1 features comfortable seating for up to 50 passengers, free WiFi, and wheelchair accessibility.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i0.wp.com/fottam.com/wp-content/uploads/2020/05/KSRTC-Superfast-RPK489-brand-new-first-run-kottayam-.jpg?w=1920&ssl=1" class="d-block w-100" alt="Bus 2" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Bus Model 2</h5>
                                                <p>Bus Model 2 is designed for longer journeys, offering spacious seating, onboard restrooms, and individual power outlets.</p>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src="https://i0.wp.com/fottam.com/wp-content/uploads/2016/02/Kerala-KSRTC-New-Scania-Metrolink-Bus.jpg?w=1160&ssl=1" class="d-block w-100" alt="Bus 3" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h5>Bus Model 3</h5>
                                                <p>Our eco-friendly Bus Model 3 operates entirely on electric power, reducing emissions without sacrificing comfort.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
                                </div>

                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <br /><br />

                                <p>View more of our buses by clicking the button below!</p>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                            <a href="/view" class="btn btn-secondary">View More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>

        </div>
    )
}

export default Home