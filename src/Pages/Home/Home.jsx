import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header"
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav"
import RightSideNav from "../../components/RightSideNav/RightSideNav"
import LatestNews from "../Home/LatestNews"

const Home = () => {
    return (
        <div className="m-2 md:mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className="text-2xl">News coming Soon</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;