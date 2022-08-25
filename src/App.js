import logo from './logo.svg';
import './App.css';
import Header from './modules/header/Header';
// // import { useHistory } from "react-router-dom";
import RouteComponent from './routes/RouteComponent';
import Footer from './modules/footer/Footer';


function App() {
  return (
    <div className="App" data-testid="app">
      <Header />
      <p className="d-flex justify-content-end text-primary-color-muted px-3">Web Master- Gautam Mukherjee +91 9874451768</p>
      <RouteComponent />
      <Footer />
    </div>

  );
}

export default App;
