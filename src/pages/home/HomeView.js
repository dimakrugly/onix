import Header from "../../components/Header/Header";
import About from "./components/About/About";
import Workspace from "./components/Workspace/Workspace";
import Ceramics from "./components/Ceramics/Ceramics";
import Collection from "./components/Collection/Collection";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

export const HomeView = () => {
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
}
