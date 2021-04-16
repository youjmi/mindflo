import React from "react";
import { Container } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import "./css/dashboard.css";


function Dashboard() {
  // Setting our component's initial state
  const [blogs, setBlogs] = useState([])
  const [formObject, setFormObject] = useState({
    title: "",
    post: "",
    date: "",
    user: ""
  })


  // Load all blogs and store them with setBlogs
  useEffect(() => {
    loadBlogs()
  }, [])

  // Loads all books and sets them to blogs
  function loadBlogs() {
    API.getBlogs()
      .then(res => 
        setBlogs(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a blogs from the database with a given id, then reloads blogs from the db
  function deleteBlog(id) {
    API.deleteBlog(id)
      .then(res => loadBlogs())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.user) {
      API.saveBlog({
        title: formObject.title,
        user: formObject.user,
        post: formObject.post,
        date: formObject.date
      })
        .then(() => setFormObject({
          title: "",
          user: "",
          post: "",
          date: ""
        }))
        .then(() => loadBlogs())
        .catch(err => console.log(err));
    }
  };




function Dashboard() {
  return (
    <div>
      <h1>DASHBOARD SECTION</h1>
      <h6>
        Lorem ipsum dolor sit amet, veniam salutatus ad vel, ei vix iudicabit
        dissentiet, fugit percipit nec ad. Minim affert eloquentiam te quo.
        Causae scribentur in nec. Pri eros senserit ut, dolor rationibus
        adipiscing ex ius, ne est viris nusquam theophrastus. Vim cu quod vocent
        consectetuer, ad qui invidunt forensibus. Cu eum falli aliquip, ut aeque
        constituto incorrupte ius, per in mentitum laboramus neglegentur. Cu
        omnis persecuti mea. Possim euripidis mel te. Soleat feugait intellegat
        vis ut, sumo dicunt cotidieque mea id, ut cibo soleat eos. Dolore
        accusata at vis, ei eum tation putant. Eam an solum maluisset
        persequeris, labore feugiat feugait ad his. Facete percipit eos ut, cu
        cetero elaboraret philosophia quo. Pro laudem patrioque ei. Melius
        minimum per ne, ius quaeque nusquam probatus id. Vix solum nominati
        adolescens ne, viris comprehensam ne has. Magna prima omnesque cu sea,
        ancillae invidunt assueverit ea usu. Ex minim accommodare qui. Numquam
        intellegat cu sed, eum exerci mediocrem sapientem at, ut usu affert
        postea. Eos ei legimus vituperata, qui ut posidonium assueverit
        instructior, minimum scaevola perfecto in vel. Cum ex homero dignissim,
        per eu causae latine fastidii. Et verear temporibus disputando quo, in
        vel dico delenit persequeris. Qui in invidunt intellegam, no esse
        recusabo philosophia nec. Nec ei postea accusamus, minimum appareat
        appellantur nec ea, affert delenit singulis his ne. Mel ne veritus
        concludaturque, alia democritum eloquentiam no eam. Qui hinc liberavisse
        ad, pro in atqui labores maiestatis. In omnes integre menandri eos, vim
        animal platonem te. Ut simul ocurreret has, menandri electram
        complectitur has cu, no dico quando usu. Ex vel feugait delectus
        persecuti, mucius commodo vis no.
      </h6>

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
