import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import Guest from './components/board-guest.component';
import Member from './components/board-member.component';
import Admin from './components/board-admin.component';
import Plan from "./components/plan.component";
import Loading from "./components/loading.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
      navbarChange: false,
      language: false,
      loggedIn: false,
      loading: false,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    window.addEventListener('scroll', this.changeNavbarColor)
  }

  logOut() {
    AuthService.logout();
  }

  changeNavbarColor = () => {
    if (window.scrollY >= 1) {
      this.setState({ navbarChange: true })
    } else {
      this.setState({ navbarChange: false })
    }
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard, navbarChange, loading, language, loggedIn } = this.state;

    return (
      <div >

        {/* <div className='notification'>
          <span className='first'>
            Get the latest on our COVID-19 response
          </span>
        </div> */}


        <nav className={navbarChange ? "navbar navbar-expand sticky-top active" : "navbar navbar-expand sticky-top"} >
          <div className="navbar-brand">
            VNomad <i style={{ color: 'red' }} className='fa fa-map-marker' />
          </div>

          <div className="navbar-nav">
            {!currentUser && (
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
            )}

            {!currentUser && (
              <li className="nav-item">
                <Link className="nav-link" data-toggle='modal' data-target='#ln' >
                  Plan
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  Home
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={'/plan'} className='nav-link' >
                  Plan
                </Link>
              </li>
            )}

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/member"} className="nav-link">
                  Member
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin
                </Link>
              </li>
            )}
          </div>

          <div className='loginbutton'>

            {currentUser ? (
              <div className="navbar-nav">

                <button className='button language' >
                  <i class="fa fa-language"></i>
                </button>

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>

                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={this.logOut}>
                    LogOut
                  </a>
                </li>

              </div>
            ) : (
              <div className="navbar-nav">

                <button className='button language' >
                  <i class="fa fa-language"></i>
                </button>

                <li className="nav-item">
                  <Link to={"/login"} target='_blank' className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} target='_blank' className="nav-link">
                    Register
                  </Link>
                </li>

              </div>
            )}
          </div>
        </nav>



        <div className='modal fade' id='ln'>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>

              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal'>&times;</button>
              </div>

              <div className='modal-body'>
                You need to login to use this function!
              </div>

              <div className='modal-footer'>
                <button className='btn btn-primary' data-dismiss='modal' onClick={() => { this.setState({ loggedIn: true }) }}>
                  OK
                </button>
                {loggedIn && (
                  <Redirect to={'/login'} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="body">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={Guest} />
            <Route path="/member" component={Member} />
            <Route path="/admin" component={Admin} />
            <Route path="/plan" component={Plan} />
            <Route path="/loading" component={Loading} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;