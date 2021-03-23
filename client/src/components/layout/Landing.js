import React from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) { 
       return <Redirect to="/dashboard" />
    }

    return (
        <section className='landing px-40 py-8 flex items-end pb-32'>
            <div className=''>
                {/* <h1 className='text-6xl text-white'>devcom</h1> */}
                <div className='flex justify-center mb-12'>
                  <img src="/SVG/logo.svg" alt=""/>
                </div>
                <p className='parag text-white text-2xl w-1/2 mx-auto text-center' >Developer Community, or how we like to call it devcom, is a website wich allows users, who sign-up, to create profiles, share posts and get help from other developers.</p>
                <div className="buttons mt-6 w-full flex gap-x-2.5 justify-center">
                    <Link className='button text-white rounded-lg font-medium py-3.5 w-24 text-center' to="/register">Sign Up</Link>
                    <Link className='button text-white rounded-lg font-medium py-3.5 w-24 text-center' to="/login">Login</Link>
                </div>
            </div>
        </section>
    )
}

Landing.propTypes = {
    isAuthenticated : PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
