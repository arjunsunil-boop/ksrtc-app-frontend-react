import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src="https://play-lh.googleusercontent.com/Hm7mdo5V8AFPY8Vlt86CzlGDbCApcR2kAIek7lYnmRA_x7IXeyhQ6tACqjyXqNe28D8=w600-h300-pc0xffffff-pd" alt="Logo" width="90" height="" class="navbar-logo" />
                        KSRTC APP
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/add">Add Bus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/view">View Buses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Search Bus</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/delete">Delete Bus</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar