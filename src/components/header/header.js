import React, {Component} from 'react';
import Navbar from "./navbar/navbar";
import {connect} from "react-redux"
import {actionLogin} from "../reduce/user-reduce";

class Header extends Component {
    render() {
        const {login, user} = this.props
        return (
            <header className="header_area">
                <div
                    className="classy-nav-container breakpoint-off d-flex align-items-center justify-content-between">


                    <Navbar/>

                    <div className="header-meta d-flex clearfix justify-content-end">

                        <div className="search-area">
                            <form action="#" method="post">
                                <input type="search" name="search" id="headerSearch" placeholder="Type for search"/>
                                <button type="submit"><i className="fa fa-search" aria-hidden="true"/>
                                </button>
                            </form>
                        </div>

                        <div className="favourite-area">
                            <a href="#"><img src="img/core-img/heart.svg" alt=""/></a>
                        </div>
                        <div className="user-login-info">
                            <a href="#"><img onClick={login} src="img/core-img/user.svg"
                                             alt=""/>{user.isAuthenticated && user.username}</a>
                        </div>
                        <div className="cart-area">
                            <a href="#" id="essenceCartBtn"><img src="img/core-img/bag.svg" alt=""/>
                                <span>3</span></a>
                        </div>
                    </div>

                </div>
            </header>
        );
    }
}

const mapStateToProps = ({user}) => {
    return {user}
}

const mapActionsToProps = ({dispatch}) => {
    return {
        login: () => {
            dispatch(actionLogin({id:1, username:"asanali"}))
        }
    }
}


export default connect(mapStateToProps, mapActionsToProps)(Header);