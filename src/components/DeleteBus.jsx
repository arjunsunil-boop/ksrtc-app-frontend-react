import React from 'react'
import Navbar from './Navbar'

const DeleteBus = () => {
    return (
        <div>
            <Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <br /><br />
                        <h3>DELETE BUSES HERE</h3>



                        <div className="row g-3">

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">BUS ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-danger">DELETE</button>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <p><i>Changes are final! Confirm before clicking!   </i></p>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DeleteBus