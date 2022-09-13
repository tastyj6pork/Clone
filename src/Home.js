import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainCarousel from './MainCarousel';
import Body from './Body';
import Foot from './Foot';

function Home() {
    return(
        <div>
            <MainCarousel />
            <Body />
            <Foot />
        </div>
    )
}

export default Home;
