import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className='landing px-40 py-8 flex items-end pb-72'>
            <div>
                {/* <h1 className='text-6xl text-white'>devcom</h1> */}
                <p className='text-white text-2xl w-1/2 mx-auto text-center' >Developer Community, or how we like to call it devcom, is a website wich allows users, who sign-up, to create profiles, share posts and get help from other developers.</p>
                <div className="buttons mt-6 w-full flex gap-x-2.5 justify-center">
                    <Link className='button text-white rounded-lg font-medium py-3.5 w-24 text-center' to="/register">Sign Up</Link>
                    <Link className='button text-white rounded-lg font-medium py-3.5 w-24 text-center' to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}

export default Landing
