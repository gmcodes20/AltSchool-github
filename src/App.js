import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import Home from "./components/Home";
import Repo from "./components/Repo";
import Profile from "./components/Profile";
import ErrorBoundry from "./components/ErrorBoundry";
import TestError from "./components/TestError";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="profile" element={<Profile />}></Route>
        <Route path="profile/:repo" element={<Repo />} />
        <Route
          path="testerror"
          element={
            <ErrorBoundry>
              <TestError />
            </ErrorBoundry>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
