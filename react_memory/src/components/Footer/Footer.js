import React from 'react';
import './Footer.css';


function Footer(props) {
  return (
    <footer className="page-footer blue">
      <div className="container">
        <div className="row">
          <h5 className="center white-text footer-update">{props.text}</h5>
        </div>
      </div>
      <div className="footer-copyright py-3 text-center">
        <div className="container center">
          © 2017 <a href="https://github.com/JeffreyPhelps/clicky-memory" target="new">Jeffrey Phelps</a>
        </div>
      </div>
    </footer>
  )
}




export default Footer;