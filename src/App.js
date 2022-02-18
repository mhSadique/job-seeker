import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import JobSeekerCreateAccount from './pages/JobSeekerCreateAccount/JobSeekerCreateAccount';
import EmployerCreateAccount from './pages/EmployerCreateAccount/EmployerCreateAccount';
import HomePage from './pages/HomePage/HomePage';
import CreateJob from './pages/CreateJob/CreateJob';
import NavigationBar from './GlobalComponents/NavigationBar/NavigationBar';
import SearchPage from './pages/SearchPage/SearchPage';
import JobDescription from './pages/JobDescription/JobDescription';
import Footer from './GlobalComponents/Footer/Footer';

function App() {
  return (
    <Router>
      <NavigationBar />

      <Switch>
        <Route path="/job-seeker-create-account">
          <JobSeekerCreateAccount />
        </Route>
        <Route path="/employer-create-account">
          <EmployerCreateAccount />
        </Route>
        <Route path="/create-job">
          <CreateJob />
        </Route>
        <Route path="/search/:searchText">
          <SearchPage />
        </Route>
        <Route path="/job-description">
          <JobDescription />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
