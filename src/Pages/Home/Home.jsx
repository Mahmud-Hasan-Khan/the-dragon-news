import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header"
import LeftSideNav from "../../components/LeftSideNav/LeftSideNav"
import RightSideNav from "../../components/RightSideNav/RightSideNav"
import LatestNews from "../Home/LatestNews"
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    // console.log(news);
    return (
        <div className="m-2 md:mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 space-y-10">
                    {
                        news?.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;