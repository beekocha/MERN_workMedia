import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner box-wrap'>
          <h1 className='x-large'>WorkMedia</h1>
          <p className='lead'>
            Create a  profile/portfolio, share posts and get help from
            other users. Just have a fun!
          </p>
          </div>
          <div className='buttons btn-wrp'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            <Link to='/profiles' className='btn btn-light'>
              Users
            </Link>
          </div>
       
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);