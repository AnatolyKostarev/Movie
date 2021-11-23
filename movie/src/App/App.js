import "./App.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Main from "../layout/Main";

function App() {
  return (
    <>
      <Header tel="+7 800 555 55 555" email="moviestar@universal.com" />
      <Main />
      <Footer text="Copyright" />
    </>
  );
}

export default App;
