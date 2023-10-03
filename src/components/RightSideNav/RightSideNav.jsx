import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import QImg1 from "../../assets/qZone1.png"
import QImg2 from "../../assets/qZone2.png"
import QImg3 from "../../assets/qZone3.png"
import bgImg from "../../assets/bg.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="p-2 space-y-5 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <div className="space-y-4">
                    <button className="outline outline-[#4081ec] w-full rounded p-2 flex items-center justify-center gap-2 text-xl hover:bg-[#4081ec] hover:text-white "> <span><FcGoogle></FcGoogle></span>Login with Google</button>

                    <button className="outline outline-black w-full rounded p-2 flex items-center justify-center gap-2 text-xl hover:bg-black hover:text-white "> <span><FaGithub></FaGithub></span>Login with GitHub</button>
                </div>
            </div>
            <div className="p-2 mb-6">
                <h2 className="text-2xl font-semibold mb-5">Find Us On</h2>
                <a className='p-4 flex text-lg items-center border rounded-t' href=""> <FaFacebook className='mr-3'></FaFacebook>Facebook</a>
                <a className='p-4 flex text-lg items-center border-x' href=""> <FaTwitter className='mr-3'></FaTwitter>Twitter</a>
                <a className='p-4 flex text-lg items-center border rounded-b' href=""> <FaYoutube className='mr-3'></FaYoutube>Youtube</a>
            </div>
            <div className="m-2 p-2 space-y-5 mb-6 bg-[#F3F3F3]">
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div className="space-y-4">
                    <img src={QImg1} alt="" />
                    <img src={QImg2} alt="" />
                    <img src={QImg3} alt="" />
                </div>
            </div>
            <div className='text-center flex flex-col text-white m-2' style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '509px',
            }}>
                <h2 className="text-3xl font-bold">Create an Amazing Newspaper</h2>
                <p className='px-9 my-6'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className='my-6 text-xl font-semibold bg-[#D72050] p-4'>Learn More</button>
            </div>
        </div>
    );
};

export default RightSideNav;