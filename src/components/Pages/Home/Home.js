import Header from "../../Header/Header.js";
import React from 'react';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <div className='home'>
          <div className='contHome'>
            <p className="bioTitle">Biographie</p>
            <div className="centImg">
            <div className="bioImg">
            </div>
            </div>
            <p className="bioText">Né à Rouen le 6 février 1948 Raymond Mauger débute la musique à l’age de treize ans puis se produit à partir de seize ans dans différents bals de la Bretagne. Se consacrant en 1980 à l’enseignement musical à Saint Brieuc, il se produit avec le big band du conservatoire local et fonde le trio Jazz +. Arrivé à paris en 1990 il se produit en duo avec Valentine et en trio dans différents clubs de la capitale, ou il enregistre en 1996 son premier album « Eclaircie ». Il se produit le plus souvent au bar la Liberté dans le 12° arrondissement de Paris, qui au fil des ans est devenu sa base d’action personnelle.</p>
            <hr></hr>
            <p className="discTitle">Discographie</p>
            <div className="contDisc">
                <div className="bloc"><p>Eclaircie</p><div className="bloci blocImg1"></div></div>
                <div className="bloc"><p>Ecoutille</p><div className="bloci blocImg2"></div></div>
                <div className="bloc"><p>Chloe</p><div className="bloci blocImg3"></div></div>
          </div>
          <hr></hr>
          </div>
        </div>
      </div>
    )
  }
};
