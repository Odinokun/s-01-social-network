import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Aside />
      <main className="main">
        <Profile />
      </main>
    </div>
  );
};

export default App;
