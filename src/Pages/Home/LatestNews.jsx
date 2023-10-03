import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="my-8 flex bg-[#F3F3F3] p-4">
            <button className="px-6 py-2 text-white bg-[#D72050] text-xl font-medium">Latest</button>
            <Marquee>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default LatestNews;