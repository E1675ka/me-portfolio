import "./App.css";
import Nav from "./components/Nav";
import Body from "./components/Body";
import Footer from "./components/footer";
function App() {
  return (
    <>
      <div>
        <header>
          <Nav />
        </header>
        <main>
          <Body />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
