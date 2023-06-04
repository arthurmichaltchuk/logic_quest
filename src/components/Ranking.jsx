import React from "react";
import Podio from '../assets/images/NewPodio.png';
import RankingImg from '../assets/images/RankingImg.png'

function Ranking() {
    return (
        <div className="fundoEsperaRanking">
  
                <img src={RankingImg} alt="Ranking"></img>

            <div className="NewPodio">

                <img src={Podio} alt="Pódio" />
            </div>
        </div>
    );
}

export default Ranking;