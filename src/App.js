import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Course from "./components/Course/Course";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Error from "./components/PageNotFound/Error";
import About from './components/About/About';
import Instructor from './components/Instructor/Instructor';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/course"><Course /></Route>
          <Route path="/instructor"><Instructor /></Route>
          <Route path="*"><Error /></Route>
        </Switch>
        <Footer />

      </Router>
    </>
  );
}

export default App;
