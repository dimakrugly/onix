import {Component} from "react";
import './main.scss'
import About from "./About/About";
import Header from "./Header/Header";
import Workspace from "./Workspace/Workspace";
import Ceramics from "./Ceramics/Ceramics";
import Banner from "./Banner/Banner";
import Subscribe from './Subscribe/Subscribe'
import Collection from "./Collection/Collection";
import Footer from "./Footer/Footer";

class Main extends Component {
    render() {
        return (<>
            <Header/>
            <About/>
            <Workspace/>
            <Ceramics/>
            <Collection/>
            <Banner/>
            <Subscribe />
            <Footer />
        </>);
    };
}

export default Main;
