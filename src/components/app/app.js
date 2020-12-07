import React, {Component, Fragment} from 'react';
import Header from "../header/header";
import UseScript from "../hooks/useScript";
import Cart from "../cart/cart";
import WelcomArea from "../welcom-area/welcom-area";
import TopCategory from "../top-category/top-category";
import NewArrivals from "../new-arrivals/new-arrivals";
import Brands from "../brands/brands";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Cart/>
                <WelcomArea/>
                <TopCategory/>
                <NewArrivals/>
                <Brands/>
                <UseScript url={"js/active.js"}/>
            </Fragment>
        );
    }
}

export default App;