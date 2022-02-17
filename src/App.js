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

function App() {
  const linkStyle = { backgroundColor: 'gray', color: 'white', fontSize: '20px', textDecoration: 'none', padding: '20px 10px' };
  const listStyle = { margin: '10px' };
  return (
    <Router>

      <nav>
        <ul style={{ display: 'flex', listStyleType: 'none', justifyContent: 'center' }}>
          <li style={listStyle}>
            <Link style={linkStyle} to="/job-seeker-create-account">Create Your Job Seeker Account</Link>
          </li>
          <li style={listStyle}>
            <Link style={linkStyle} to="/employer-create-account">Create Your Employer Account</Link>
          </li>
          <li style={listStyle}>
            <Link style={linkStyle} to="/create-job">Create Job (For Employer)</Link>
          </li>
        </ul>
      </nav>

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
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
