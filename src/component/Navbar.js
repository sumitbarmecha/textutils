import React from 'react';
import{Link} from 'react-router-dom';

export default function navbar(props) { 

  return (
    <div> 
      <nav className={`navbar text-${props.mode==='light'?'dark':'light'} navbar-expand-lg navbar-${props.mode} 
      bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="form-check form-switch align-middle">
  <input className="form-check-input align-middle" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label align-middle" htmlFor="flexSwitchCheckDefault">darkmode</label>
</div>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.about}</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              
            </ul>
            <form className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{width:"30px" , height:"20px", cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width:"30px" , height:"20px", cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width:"30px" , height:"20px", cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width:"30px" , height:"20px", cursor:'pointer'}}></div>
              <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark ')}} style={{width:"30px" , height:"20px", cursor:'pointer'}}></div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
