import "./App.css";
import "./bookTicketMovie.css";
import HomePage from "./Movie/pages/HomePage";
import bgMovie from "./images/bgmovie.jpg";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgMovie})`,
        height: "106.4vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="overlay"></div>
      <HomePage />
    </div>
  );
}

export default App;
