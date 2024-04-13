import React, { useState } from 'react'
import Navbar from './Navbar'
import '../App.css'

const ViewBus = () => {
    const [ksrtc, changeKsrtc] = useState(
        [
            { "name": "KSRTC 1", "from": "Alappuzha", "to": "Kochi", "type": "Super Fast", "fare": "Rs. 200", "img": "https://wallpapercave.com/wp/wp8970009.jpg" },
            { "name": "KSRTC 2", "from": "Kottarakkara", "to": "Coimbature", "type": "Super Fast", "fare": "Rs. 300", "img": "https://wallpapercave.com/wp/wp7570214.jpg" },
            { "name": "KSRTC 3", "from": "Ernakulam", "to": "Kottayam", "type": "Super Fast", "fare": "Rs. 100", "img": "https://wallpapercave.com/wp/wp8970105.jpg" },
            { "name": "KSRTC 4", "from": "Palakkad", "to": "Kochi", "type": "Super Fast", "fare": "Rs. 400", "img": "https://wallpapercave.com/wp/wp8970114.jpg" },
            { "name": "KSRTC 5", "from": "Theni", "to": "Kochi", "type": "Super Fast", "fare": "Rs. 500", "img": "https://wallpapercave.com/wp/wp8970137.jpg" }

        ]
    )

    return (

        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <br /><br />
                        <div className="row g-3">
                        {
                        ksrtc.map(
                            (value)=>{

                                return <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <div class="card" width="10rem">
                                <img src={value.img} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text">{value.from} to {value.to}</p>
                                    <p class="card-text">Type : {value.type}</p>
                                    <p class="card-text">Fare : {value.fare}</p>
                                    <a href="#" class="btn btn-secondary">View Details</a>
                                </div>
                            </div>


                        </div>

                            }
                        )
                       }
                            
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ViewBus