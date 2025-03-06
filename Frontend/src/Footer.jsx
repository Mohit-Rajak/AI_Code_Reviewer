import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="">
            <div className="">
                    {/* Social Media Section */}
                    <div className='footer'>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Mohit-Rajak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/mohit-rajak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://twitter.com/Mohit_Rajak5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <FaTwitter size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="end">
                    <p style={{textAlign:"center", padding:"20px"}}>
                        &copy; {new Date().getFullYear()} AI-Powered Code Reviewer.Mohit Rajak All rights reserved.
                    </p>
                </div>
        </footer>
    );
};

export default Footer;