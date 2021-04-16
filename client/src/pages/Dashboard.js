import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import Charts from "../components/Charts";
import "./css/dashboard.css";




function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD SECTION</h1>
      <Charts/>


      <Container>
        <h1>Yoga Workouts</h1>
        <SearchBar 
        // search={this.state.search}
        //     handleInputChange={this.handleInputChange}
            />
        <h6>
          Lorem ipsum dolor sit amet, veniam salutatus ad vel, ei vix iudicabit
          dissentiet, fugit percipit nec ad. Minim affert eloquentiam te quo.
          Causae scribentur in nec. Pri eros senserit ut, dolor rationibus
          adipiscing ex ius, ne est viris nusquam theophrastus. Vim cu quod
          vocent consectetuer, ad qui invidunt forensibus. Cu eum falli aliquip,
          ut aeque constituto incorrupte ius, per in mentitum laboramus
          neglegentur. Cu omnis persecuti mea. Possim euripidis mel te. Soleat
          feugait intellegat vis ut, sumo dicunt cotidieque mea id, ut cibo
          soleat eos. Dolore accusata at vis, ei eum tation putant. Eam an solum
          maluisset persequeris, labore feugiat feugait ad his. Facete percipit
          eos ut, cu cetero elaboraret philosophia quo. Pro laudem patrioque ei.
        </h6>
      </Container>
    </div>
  );
}

export default Dashboard;
