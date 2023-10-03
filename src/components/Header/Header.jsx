import logo from "../../assets/logo.png"
import moment from 'moment';

const Header = () => {
    return (
        <div className="flex items-center justify-center text-center mx-2 md:mx-auto">
            <div>
                <img src={logo} alt="" />
                <p className="text-lg mt-1 text-[#706F6F]">Journalism Without Fear or Favour</p>
                <p className=" text-xl font-medium text-[#403F3F] ">{moment().format("dddd")}<span className="text-[#706F6F]"> {moment().format("MMMM D, YYYY")}</span></p>

            </div>
        </div>
    );
};

export default Header;