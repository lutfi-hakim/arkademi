import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/bootstrap.scss";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
