import React from "react";
import "./Header.css"
import * as mdb from 'mdb-ui-kit'; // lib
import { Input } from 'mdb-ui-kit'; // modulecls

function Header (){
    return(
        <div className="container_header">
            
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <div class="container-fluid">

                        <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <i class="fas fa-bars"></i>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">


                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link" href="#">Dashboard</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                            </li>
                        </ul>

                        </div>



                        <div class="d-flex align-items-center">

                        <a class="text-reset me-3" href="#">
                            <i class="fas fa-shopping-cart"></i>
                        </a>


                        <div class="dropdown">
                            <a
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                            >
                            <i class="fas fa-bell"></i>
 
                            </a>
                            <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                            >
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                            </ul>
                        </div>

                        </div>

                    </div>

                    </nav>
        </div>
    )
}

export default Header