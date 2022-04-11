import React from 'react';
import './Profile.css'
import Typical from 'react-typical'
import ScrollService from '../../../utilities/ScrollService';

const Profile = () => {
    return (

        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="colz">
                        <div className="colz-icon">
                            <a href="https://www.facebook.com/trshawonbd">
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="https://www.linkedin.com/in/md-taibur-rahman-0497b5127/">
                                <i className='fa fa-linkedin-square'></i>
                            </a>
                            <a href="https://www.instagram.com/taibur_rahman_shawon/">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="https://github.com/trshawonbd">
                                <i className='fa fa-github-square'></i>
                            </a>
                            <a href="https://twitter.com/6a642b40fe2a41f">
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'am <span className="highlighted-text">Md Taibur Rahman</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev",
                                        2000,
                                        "Full stack Developer",
                                        2000,
                                        "React Developer",
                                        2000,
                                        "Cross Platform Dev",
                                        2000,
                                        "UI/UX Dev",
                                        2000,
                                    ]}>
                                </Typical>
                            </h1>
                            <span className="profile-role-tagline">
                                Knack of building web applications with front and backend operations.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        >{" "}Hire Me
                            {""}
                        </button>
                        <a href="Md's Resume.pdf" download="Md's Resume.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;