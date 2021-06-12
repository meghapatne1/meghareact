import './App.css';
import About from './About';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function App() {
  return (
         <> 
     
        <section id="container">
         <header className="header black-bg">
         
      <div className="sidebar-toggle-box">
        <div className="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
      </div>
     
      <a href="index.html" className="logo"><b>DASH<span>IO</span></b></a>
     
      <div className="nav notify-row" id="top_menu">
        
        <ul className="nav top-menu">
        
          <li className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
              <i className="fa fa-tasks"></i>
              <span className="badge bg-theme">4</span>
              </a>
            <ul className="dropdown-menu extended tasks-bar">
              <div className="notify-arrow notify-arrow-green"></div>
              <li>
                <p className="green">You have 4 pending tasks</p>
              </li>
              <li>
                <a href="index.html#">
                  <div className="task-info">
                    <div className="desc">Dashio Admin Panel</div>
                    <div className="percent">40%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}>
                      <span className="sr-only">40% Complete (success)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div className="task-info">
                    <div className="desc">Database Update</div>
                    <div className="percent">60%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}>
                      <span className="sr-only">60% Complete (warning)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div className="task-info">
                    <div className="desc">Product Development</div>
                    <div className="percent">80%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: '80%'}}>
                      <span className="sr-only">80% Complete</span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="index.html#">
                  <div className="task-info">
                    <div className="desc">Payments Sent</div>
                    <div className="percent">70%</div>
                  </div>
                  <div className="progress progress-striped">
                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}>
                      <span className="sr-only">70% Complete (Important)</span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="external">
                <a href="#">See All Tasks</a>
              </li>
            </ul>
          </li>
      
          <li id="header_inbox_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
              <i className="fa fa-envelope-o"></i>
              <span className="badge bg-theme">5</span>
              </a>
            <ul className="dropdown-menu extended inbox">
              <div className="notify-arrow notify-arrow-green"></div>
              <li>
                <p className="green">You have 5 new messages</p>
              </li>
              <li>
                <a href="index.html#">
                  <span className="subject">
                  <span className="from">Zac Snider</span>
                  <span className="time">Just now</span>
                  </span>
                  <span className="message">
                  Hi mate, how is everything?
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="subject">
                  <span className="from">Divya Manian</span>
                  <span className="time">40 mins.</span>
                  </span>
                  <span className="message">
                  Hi, I need your help with this.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="subject">
                  <span className="from">Dan Rogers</span>
                  <span className="time">2 hrs.</span>
                  </span>
                  <span className="message">
                  Love your new Dashboard.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="subject">
                  <span className="from">Dj Sherman</span>
                  <span className="time">4 hrs.</span>
                  </span>
                  <span className="message">
                  Please, answer asap.
                  </span>
                  </a>
              </li>
              <li>
                <a href="index.html#">See all messages</a>
              </li>
            </ul>
          </li>
         
          <li id="header_notification_bar" className="dropdown">
            <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
              <i className="fa fa-bell-o"></i>
              <span className="badge bg-warning">7</span>
              </a>
            <ul className="dropdown-menu extended notification">
              <div className="notify-arrow notify-arrow-yellow"></div>
              <li>
                <p className="yellow">You have 7 new notifications</p>
              </li>
              <li>
                <a href="index.html#">
                  <span className="label label-danger"><i className="fa fa-bolt"></i></span>
                  Server Overloaded.
                  <span className="small italic">4 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="label label-warning"><i className="fa fa-bell"></i></span>
                  Memory #2 Not Responding.
                  <span className="small italic">30 mins.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="label label-danger"><i className="fa fa-bolt"></i></span>
                  Disk Space Reached 85%.
                  <span className="small italic">2 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">
                  <span className="label label-success"><i className="fa fa-plus"></i></span>
                  New User Registered.
                  <span className="small italic">3 hrs.</span>
                  </a>
              </li>
              <li>
                <a href="index.html#">See all notifications</a>
              </li>
            </ul>
          </li>
        
        </ul>
  
      </div>
      <div className="top-menu">
        <ul className="nav pull-right top-menu">
          <li><a className="logout" href="login.html">Logout</a></li>
        </ul>
      </div>
    </header>


    <aside>
      <div id="sidebar" className="nav-collapse ">
        
        <ul className="sidebar-menu" id="nav-accordion">
          <p className="centered">
            image
            </p>
          <h5 className="centered">Sam Soffes</h5>
          <li className="mt">
            <a className="active" href="index.html">
              <i className="fa fa-dashboard"></i>
              <span>Dashboard</span>
              </a>
          </li>
          <li className="sub-menu">
            <Router>
              <Link to="">Home</Link>
              <Link to="/about">About</Link>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Router>
            
            <a href="javascript:;">
              <i className="fa fa-desktop"></i>
              <span>UI Elements</span>
              </a>
            <ul className="sub">
              <li><a href="general.html">General</a></li>
              <li><a href="buttons.html">Buttons</a></li>
              <li><a href="panels.html">Panels</a></li>
              <li><a href="font_awesome.html">Font Awesome</a></li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className="fa fa-cogs"></i>
              <span>Components</span>
              </a>
            <ul className="sub">
              <li><a href="grids.html">Grids</a></li>
              <li><a href="calendar.html">Calendar</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="todo_list.html">Todo List</a></li>
              <li><a href="dropzone.html">Dropzone File Upload</a></li>
              <li><a href="inline_editor.html">Inline Editor</a></li>
              <li><a href="file_upload.html">Multiple File Upload</a></li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className="fa fa-book"></i>
              <span>Extra Pages</span>
              </a>
            <ul className="sub">
              <li><a href="blank.html">Blank Page</a></li>
              <li><a href="login.html">Login</a></li>
              <li><a href="lock_screen.html">Lock Screen</a></li>
              <li><a href="profile.html">Profile</a></li>
              <li><a href="invoice.html">Invoice</a></li>
              <li><a href="pricing_table.html">Pricing Table</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="404.html">404 Error</a></li>
              <li><a href="500.html">500 Error</a></li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className="fa fa-tasks"></i>
              <span>Forms</span>
              </a>
            <ul className="sub">
              <li><a href="form_component.html">Form Components</a></li>
              <li><a href="advanced_form_components.html">Advanced Components</a></li>
              <li><a href="form_validation.html">Form Validation</a></li>
              <li><a href="contactform.html">Contact Form</a></li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className="fa fa-th"></i>
              <span>Data Tables</span>
              </a>
            <ul className="sub">
              <li><a href="basic_table.html">Basic Table</a></li>
              <li><a href="responsive_table.html">Responsive Table</a></li>
              <li><a href="advanced_table.html">Advanced Table</a></li>
            </ul>
          </li>
          <li>
            <a href="inbox.html">
              <i className="fa fa-envelope"></i>
              <span>Mail </span>
              <span className="label label-theme pull-right mail-info">2</span>
              </a>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className=" fa fa-bar-chart-o"></i>
              <span>Charts</span>
              </a>
            <ul className="sub">
              <li><a href="morris.html">Morris</a></li>
              <li><a href="chartjs.html">Chartjs</a></li>
              <li><a href="flot_chart.html">Flot Charts</a></li>
              <li><a href="xchart.html">xChart</a></li>
            </ul>
          </li>
          <li className="sub-menu">
            <a href="javascript:;">
              <i className="fa fa-comments-o"></i>
              <span>Chat Room</span>
              </a>
            <ul className="sub">
              <li><a href="lobby.html">Lobby</a></li>
              <li><a href="chat_room.html"> Chat Room</a></li>
            </ul>
          </li>
          <li>
            <a href="google_maps.html">
              <i className="fa fa-map-marker"></i>
              <span>Google Maps </span>
              </a>
          </li>
        </ul>
        
      </div>
    </aside>



    {/* <section id="main-content">
      <section className="wrapper">
        <div className="row">
          <div className="col-lg-9 main-chart">
           
           jjerjrri
           
         
        
  
           
            </div>
            
          </div>
         
         
      
      </section>
    </section> */}

    </section>
    </>
  );
}

export default App;
