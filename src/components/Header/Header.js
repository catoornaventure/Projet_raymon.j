import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return(
      <header>

        <div className="headBan"></div>
        <ul className="liste">
          <li className="menu"><Link to="/home">Biographie</Link></li>
          <li className="menu"><Link to="">Concerts</Link></li>
          <li className="menu"><Link to="">Videos</Link></li>
          <li className="menu"><Link to="">Liens</Link></li>
          <li className="menu"><Link to="/contact">Contact</Link></li>
        </ul>
        <hr></hr>

      </header>
    )
  }
};
