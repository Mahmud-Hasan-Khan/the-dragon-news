import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightSideNav from "../../components/RightSideNav/RightSideNav";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import NewsDetailsCard from "./NewsDetailsCard";

const NewsDetails = () => {
    const [getNews, setGetNews] = useState({});
    const { id } = useParams();
    const news = useLoaderData();

    useEffect(() => {
        const findNews = news?.find(newsDetails => newsDetails._id === id);
        setGetNews(findNews);
    }, [id, news]);
    // console.log(getNews);

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="col-span-3">
                    <NewsDetailsCard getNews={getNews}></NewsDetailsCard>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;