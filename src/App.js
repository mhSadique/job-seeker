import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import JobSeekerCreateAccount from './pages/JobSeekerCreateAccount/JobSeekerCreateAccount';
import EmployerCreateAccount from './pages/EmployerCreateAccount/EmployerCreateAccount';
import HomePage from './pages/HomePage/HomePage';
import CreateJob from './pages/CreateJob/CreateJob';
import NavigationBar from './GlobalComponents/NavigationBar/NavigationBar';
import SearchPage from './pages/SearchPage/SearchPage';

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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
