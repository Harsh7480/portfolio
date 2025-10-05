import React from 'react';
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
    return (
        <footer className="relative bg-gray-50 dark:bg-gray-700 pt-16 pb-8 text-center rounded-t-[50px]">
            <div className="max-w-3xl mx-auto px-4">
                {/* Contact Button */}
                <div className="mb-6">
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-200 dark:bg-gray-600 tracking-wider bg-gray-100 py-1 px-3 rounded-full">
                        Get in Touch
                    </span>
                </div>

                {/* Heading */}
                <p className="hidden text-gray-600 dark:text-gray-200 mb-6">
                    What’s next? Feel free to reach out to me if you're looking for
                    a developer, have a query, or simply want to connect.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                    {/* Email */}
                    <div className="flex items-center justify-center space-x-3">
                        {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M16 12l-4 4-4-4m8-4l-4-4-4 4"
                                />
                            </svg> */}
                            <img src="/icons/Email.png" alt="email" className='w-8' />
                        <span className="font-medium text-gray-800 dark:text-white">
                            jaiswalharsh9625@gmail.com
                        </span>
                        {/* <button
                            onClick={() =>
                                navigator.clipboard.writeText('jaiswalharsh9625@gmail.com')
                            }
                            className="text-gray-500 hover:text-gray-700"
                        >
                        </button> */}
                    </div>

                    <div className="flex items-center justify-center space-x-3">
                        {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5h2l3.6 7.59-1.35 2.44a1 1 0 00.9 1.47h7a1 1 0 00.9-1.45l-1.4-2.46L19 5H5"
                            />
                        </svg> */}
                        <img src="/icons/call.png" alt="email" className='w-8' />
                        <span className="font-medium text-gray-800 dark:text-white">
                            +91 9625916360
                        </span>
                        {/* <button
                            onClick={() => navigator.clipboard.writeText('+918980500565')}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            📋
                        </button> */}
                    </div>
                </div>

                {/* Social Icons */}
                <p className="text-sm text-gray-500 dark:text-gray-200 mb-4">
                    You may also find me on these platforms!
                </p>
                <div className="flex justify-center space-x-6 mb-8">
                    <a href="https://github.com/Harsh7480" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 hover:text-gray-900">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/harsh-jaiswal-294940202/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:jaiswalharsh9625@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-red-600">
                        <Mail className="w-6 h-6" />
                    </a>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-200 pt-4 text-sm text-gray-500 dark:text-gray-400">
                    © 2025 | Designed with ❤️ by <span className="font-semibold text-gray-800 dark:text-gray-200">Harsh Jaiswal</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
