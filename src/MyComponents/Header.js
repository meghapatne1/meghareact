import React from 'react';
import PropTypes from 'prop-types';



export default function Header(props){
return(
<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">{props.title}</a>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Features</a>
      <a className="nav-item nav-link" href="#">Pricing</a>
     <a className="nav-item nav-link">{props.searchBar ? "true" :"false"}</a>
     <a className="nav-item nav-link" href="#">{props.head}</a>
    </div>
  </div>
</nav>
)
}

Header.propTypes = {
    title: PropTypes.string, 
    head: PropTypes.number 
}
/* if we pass number from title props we get error bz we define title: PropTypes is string  */ 

