import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
