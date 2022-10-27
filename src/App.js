import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Pokemon } from "./components/Pokemon.js";
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Pokemon />
      <Footer />
    </div>
  );
}

export default App;
