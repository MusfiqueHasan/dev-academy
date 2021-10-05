import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Course from "./components/Course/Course";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from './components/Home/Home';
import Error from "./components/PageNotFound/Error";
import About from './components/About/About';
import Instructor from './components/Instructor/Instructor';
import './App.css'
import CommonPage from "./components/CommonPage/CommonPage";
import SingleCourseUI from "./components/Course/SingleCourseUI";
import Certificate from './components/Certificate/Certificate';
function App() {
  const courseText = `Courses`
  return (
    <div >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/course"><Course courseText={courseText} /></Route>
          <Route path="/instructor"><Instructor /></Route>
          <Route path="/common"><CommonPage /></Route>
          <Route path="/certificate"><Certificate /></Route>
          <Route exact path="/courses/:id/:cn/:cd/:ct/:cc/:ctb/:price"><SingleCourseUI /></Route>
          <Route path="*"><Error /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
