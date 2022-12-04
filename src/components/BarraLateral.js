import React from "react";
import { Link } from "react-router-dom"
import image from '../assets/images/logodhbikes.svg';

function BarraLateral() {
    return (
        <>
            {/*<!-- Sidebar -->*/}
            < ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" >

                {/*<!-- Sidebar - Brand -->*/}
                < a className="sidebar-brand d-flex align-items-center justify-content-center" href="/" >

                    <img src={image} alt="Digital House" />

                </a >

                {/*<!-- Divider -->*/}
                < hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                < li className="nav-item active" >
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - DH Bikes</span></Link>
                </li >

                {/*<!-- Divider -->*/}
                < hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                < div className="sidebar-heading" > Actions</div >

                {/*<!-- Nav Item - Pages -->*/}
                < li className="nav-item" >
                    <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categories</span>
                    </Link>
                </li >

                {/*<!-- Nav Item - Charts -->*/}
                < li className="nav-item" >
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Last Product</span></Link>
                </li >

                {/*<!-- Nav Item - Tables -->*/}
                < li className="nav-item nav-link" >
                    <Link className="nav-link" to="/ContentRowProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li >

                {/*<!-- Divider -->*/}
                < hr className="sidebar-divider d-none d-md-block" />
            </ul >

        </>
    )
}

export default BarraLateral