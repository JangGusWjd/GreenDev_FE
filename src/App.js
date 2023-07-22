import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import { CampaignProvider } from "./components/CampaignContext";
import NavBar from "./components/Navbar";
import MainApp from "./pages/MainPage/MainApp";
import RegisterApp from "./pages/RegisterPage/RegisterApp";
import ProfileApp from "./pages/ProfilePage/ProfileApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          element={
            <CampaignProvider>
              <NavBar />
            </CampaignProvider>
          }
        >
          <Route path="/" element={<MainApp />} />
          <Route path="/register" element={<RegisterApp />} />
          <Route path="/profile" element={<ProfileApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
