import PropTypes from 'prop-types';

const NewsDetailsCard = ({ getNews }) => {
    // console.log(getNews);
    const { title, image_url, details, author } = getNews;
    return (
        <div>
            <div className="md:col-span-3 border space-y-10">
                <div className="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md border">
                    <div className="flex items-center justify-between px-4 py-2 bg-[#F3F3F3] ">
                        <div className="flex items-center gap-2">
                            <img
                                alt="tania andrew"
                                src={author?.img}
                                className="h-12 w-12 rounded-full border-2 border-white object-cover object-center" />
                            <div>
                                <p>{author?.name} </p>
                                <p>{author?.published_date} </p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.593 3.322C18.693 3.45 19.5 4.399 19.5 5.507V21L12 17.25L4.5 21V5.507C4.5 4.399 5.306 3.45 6.407 3.322C10.1232 2.89063 13.8768 2.89063 17.593 3.322V3.322Z" stroke="#706F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M7.21701 10.907C6.97487 10.4713 6.59491 10.1284 6.13678 9.93198C5.67864 9.7356 5.16826 9.6969 4.68576 9.82197C4.20325 9.94704 3.77594 10.2288 3.47089 10.623C3.16584 11.0172 3.00032 11.5015 3.00032 12C3.00032 12.4984 3.16584 12.9828 3.47089 13.377C3.77594 13.7712 4.20325 14.0529 4.68576 14.178C5.16826 14.3031 5.67864 14.2644 6.13678 14.068C6.59491 13.8716 6.97487 13.5287 7.21701 13.093M7.21701 10.907C7.39701 11.231 7.50001 11.603 7.50001 12C7.50001 12.397 7.39701 12.77 7.21701 13.093M7.21701 10.907L16.783 5.59299M7.21701 13.093L16.783 18.407M16.783 18.407C16.6395 18.6654 16.5482 18.9495 16.5145 19.2431C16.4808 19.5368 16.5052 19.8342 16.5864 20.1184C16.6676 20.4026 16.804 20.668 16.9878 20.8995C17.1716 21.1309 17.3991 21.324 17.6575 21.4675C17.9159 21.611 18.2 21.7023 18.4936 21.736C18.7873 21.7697 19.0847 21.7453 19.3689 21.6641C19.6531 21.5829 19.9185 21.4465 20.15 21.2627C20.3815 21.0789 20.5745 20.8514 20.718 20.593C21.0079 20.0712 21.0786 19.4556 20.9146 18.8816C20.7506 18.3077 20.3653 17.8224 19.8435 17.5325C19.3217 17.2426 18.7061 17.1719 18.1321 17.3359C17.5582 17.4999 17.0729 17.8852 16.783 18.407V18.407ZM16.783 5.59299C16.9233 5.85713 17.1148 6.09066 17.3463 6.27992C17.5779 6.46919 17.8449 6.61039 18.1316 6.69527C18.4184 6.78015 18.7192 6.80702 19.0165 6.77429C19.3137 6.74156 19.6015 6.64989 19.8629 6.50465C20.1244 6.35942 20.3542 6.16351 20.539 5.92841C20.7239 5.6933 20.86 5.4237 20.9394 5.13538C21.0189 4.84705 21.04 4.54578 21.0016 4.24919C20.9633 3.95259 20.8662 3.66662 20.716 3.40799C20.4201 2.89833 19.936 2.52513 19.3678 2.36861C18.7996 2.21208 18.1927 2.28474 17.6775 2.57095C17.1624 2.85716 16.78 3.33408 16.6128 3.89919C16.4455 4.4643 16.5066 5.07248 16.783 5.59299V5.59299Z" stroke="#706F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative mx-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                        <img src={image_url} alt="profile-picture" />
                    </div>
                    <div className="px-6 pt-6">
                        <h2 className="text-xl font-semibold">{title} </h2>
                    </div>
                    <div className="p-6">
                        <p className=" text-base font-medium leading-relaxed">
                            <p>{details} </p>
                        </p>
                    </div>
                    <div className="flex justify-center gap-7 p-6 pt-2">
                        <a
                            href="#facebook"
                            className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                        >
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

NewsDetailsCard.propTypes = {
    getNews: PropTypes.node
}

export default NewsDetailsCard;