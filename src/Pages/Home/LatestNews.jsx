import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="my-8 flex bg-[#F3F3F3] p-4">
            <button className="px-6 py-2 text-white bg-[#D72050] text-xl font-medium">Latest</button>
            <Marquee pauseOnHover={true} speed={100} className="text-[#403F3F] " >
                <Link className="mr-12" to='/' > Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12" to='/' > Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="mr-12" to='/' > Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;