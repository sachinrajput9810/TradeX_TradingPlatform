import React from 'react';
import './Auth.css';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const renderForm = () => {
    if (location.pathname === "/signup") {
      return (
        <>
          <section className='w-full'>
            <SignupForm />
            <div className=' items-center flex justify-center mt-4 text-white text-sm'>
                <span>Already have an account?</span>
                <Button
                variant="outline"
                onClick={() => navigate("/signin")}
                className="ml-2 border border-white text-white hover:bg-white hover:text-black transition"
                >
                Sign In
                </Button>
            </div>
          </section>
        </>
      );
    } else if (location.pathname === "/forgot-password") {
      return (
        <>
          <section className='w-full'>
             <ForgotPasswordForm />
                <div className='items-center flex justify-center mt-4 text-white text-sm'>
                    <span>Back to login?</span>
                    <Button
                    variant="outline"
                    className="ml-2 border border-white text-white hover:bg-white hover:text-black transition"
                    onClick={() => navigate("/signin")}
                    >
                    Sign In
                    </Button>
                </div>
          </section>
        </>
      );
    } else {
      return (
        <>
          <section className='w-full'>
            <SigninForm />
            <div className='items-center flex justify-center mt-4 text-white text-sm'>
                <span>Don’t have an account?</span>
                <Button
                variant="outline"
                className="ml-2 border border-white text-white hover:bg-white hover:text-black transition"
                onClick={() => navigate("/signup")}
                >
                Sign Up
                </Button>
            </div>
          </section>

          <div className='items-center flex justify-center mt-2'>
            <Button
              variant="link"
              onClick={() => navigate("/forgot-password")}
              className="text-blue-300 hover:underline text-sm"
            >
              Forgot Password?
            </Button>
          </div>
        </>
      );
    }
  };

  return (
    <div className='h-screen relative authContainer'>

      {/* Dark Overlay */}
      <div className='absolute top-0 right-0 left-0 bg-[#030712] bg-opacity-50 z-10'></div>

      {/* Left-Aligned Glass Card */}
      <div
        className='bgBlure absolute top-1/2 left-[8%] transform -translate-y-1/2
        flex flex-col justify-center items-center h-[35rem] w-[30rem]
        rounded-xl z-20 bg-white/10 backdrop-blur-md shadow-2xl border border-white/20 px-6 py-10'
      >
        <div className='text-5xl font-bold mb-10 text-white'>
          <span className='text-orange-600'>Trade</span>
          <span>X</span>
        </div>

        {renderForm()}
      </div>

    </div>
  );
};

export default Auth;
