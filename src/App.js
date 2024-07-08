import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import './App.css';

function App() {
  return (
    <div className="App">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>

      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
