import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return(
        <header>





    <ul className="liste">

    <div className="titre">
        <h1>Raymond Mauger</h1>
        <h3>Tout sur le personnage</h3>
    </div>

		<li className="menu"><Link to="/home">Biographie</Link></li>
		<li className="menu"><Link to="">Concerts</Link></li>
		<li className="menu"><Link to="">Videos</Link></li>
		<li className="menu"><Link to="">Liens</Link></li>
		<li className="menu"><Link to="/contact">Contact</Link></li>

	</ul>




</header>
    )
  }
};
