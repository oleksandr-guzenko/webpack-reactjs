import React, { useEffect, useState } from 'react';
import Admin from '../Components/Admin';
// import Cookies from 'universal-cookie';
function Login(props) {
  // const
  //   [username, updateUsername] = useState(''),
  //   [password, updatePassword] = useState(''),
  //   [displayError, updateDisplayError] = useState(false),
  //   [logginAccepted, updateLogin] = useState(false),
  //   cookies = new Cookies();
  useEffect(() => {
    document.title = 'Login to dashboard'
    if (cookies.get('username') === 'admin') {
      updateLogin(true)
    }
  }, []);


  // const redirect = () => {
  //   if (password !== process.env.PWRD) {
  //     updateDisplayError(true)
  //     setTimeout(() => {
  //       updateDisplayError(false);
  //     }, 5000)
  //   }
  //   if (username !== process.env.USERNAME) {
  //     updateDisplayError(true)
  //     setTimeout(() => {
  //       updateDisplayError(false);
  //     }, 5000)
  //   }

  //   if (username === process.env.USERNAME && password === process.env.PWRD) {
  //     cookies.set('username', 'admin', { path: '/dashboard/', maxAge: 30 * 60 });
  //     updateLogin(true)
  //   }
  // }

  return (
    <>
      {/* { !logginAccepted &&
        <div className="login-screen">
          <div className="overlay">
            <div className="title-header-container">
              <h1 className="title-header">Welcome to dashboard</h1>
            </div>
            <div className="username-container">
              <label htmlFor="username">
                <span className="frame">
                  <i className="fas fa-user"></i>
                </span>
              </label>
              <input name="username" id="username" value={username} onChange={(e) => updateUsername(e.target.value)} placeholder="Username" />
            </div>
            <label htmlFor="password">
              <div className="password-container">
                <span className="frame"><i className="fas fa-lock"></i></span>
                <input type="password" id="password" value={password} name="password" onChange={(e) => updatePassword(e.target.value)} placeholder="Password" />
              </div>
            </label>
            {displayError &&
              <div className="error-container">
                <span className={`error ${displayError ? 'show' : 'hide'}`}>Username/Password is wrong</span>
              </div>
            }
            <div className="submit-container">
              <button className="btn-submit" onClick={redirect} type="button">Login</button>
            </div>
          </div>
        </div>
      }
      { logginAccepted && */}
        <Admin mode={props.mode} />
      {/* } */}
    </>
  );
}

export default Login;