import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

function App() {
  return (
    <div className="App">
       <Nav />
      <Header />
      <div className="section" >
        <Section1 />
        <Section2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
