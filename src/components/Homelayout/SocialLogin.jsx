import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div className="text-center px-4 sm:px-6 md:px-0 py-5">
            <h2 className="font-bold mb-5 text-lg sm:text-xl">Login with</h2>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full max-w-md mx-auto">
                <button className="btn btn-outline btn-secondary flex-1 py-3 flex items-center justify-center gap-2 min-w-[150px]">
                    <FcGoogle className="text-xl" />
                    Login with Google
                </button>

                <button className="btn btn-outline btn-primary flex-1 py-3 flex items-center justify-center gap-2 min-w-[150px]">
                    <FaGithub className="text-xl" />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
