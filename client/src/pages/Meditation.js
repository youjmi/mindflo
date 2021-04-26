import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Cards from "../components/Cards/Cards"
import { Container } from "react-bootstrap";
//import PlayerBtn from "../components/PlayerBtn";
import MusicPlayer from "../components/MusicPlayer";
import MedCarousel from "../components/MedCarousel";
import "./css/meditation.css";
import "bootstrap/dist/css/bootstrap.min.css";

//MEDITATION page info..//
function Meditation() {
  return (
    <div>
      {/* <h1>MEDITATION SECTION</h1>
        <h6><p>Lorem ipsum dolor sit amet, veniam salutatus ad vel, ei vix iudicabit dissentiet, fugit percipit nec ad. Minim affert eloquentiam te quo. Causae scribentur in nec. Pri eros senserit ut, dolor rationibus adipiscing ex ius, ne est viris nusquam theophrastus. Vim cu quod vocent consectetuer, ad qui invidunt forensibus. Cu eum falli aliquip, ut aeque constituto incorrupte ius, per in mentitum laboramus neglegentur. Cu omnis persecuti mea.

Possim euripidis mel te. Soleat feugait intellegat vis ut, sumo dicunt cotidieque mea id, ut cibo soleat eos. Dolore accusata at vis, ei eum tation putant. Eam an solum maluisset persequeris, labore feugiat feugait ad his. Facete percipit eos ut, cu cetero elaboraret philosophia quo. Pro laudem patrioque ei.

Melius minimum per ne, ius quaeque nusquam probatus id. Vix solum nominati adolescens ne, viris comprehensam ne has. Magna prima omnesque cu sea, ancillae invidunt assueverit ea usu. Ex minim accommodare qui. Numquam intellegat cu sed, eum exerci mediocrem sapientem at, ut usu affert postea. Eos ei legimus vituperata, qui ut posidonium assueverit instructior, minimum scaevola perfecto in vel.

Cum ex homero dignissim, per eu causae latine fastidii. Et verear temporibus disputando quo, in vel dico delenit persequeris. Qui in invidunt intellegam, no esse recusabo philosophia nec. Nec ei postea accusamus, minimum appareat appellantur nec ea, affert delenit singulis his ne. Mel ne veritus concludaturque, alia democritum eloquentiam no eam.

Qui hinc liberavisse ad, pro in atqui labores maiestatis. In omnes integre menandri eos, vim animal platonem te. Ut simul ocurreret has, menandri electram complectitur has cu, no dico quando usu. Ex vel feugait delectus persecuti, mucius commodo vis no.</p></h6> */}

      <section className="meditationVideos">
        <Container>
          <MedCarousel />
        </Container>
      </section>

      <div>Break</div>

      <section className="musicPlayer">
        <Container>
          <MusicPlayer />
        </Container>
      </section>
    </div>
  );
}

export default Meditation;
