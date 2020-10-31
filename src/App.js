import './App.scss';
import Header from './components/Header';
import Content from './components/Content';
import Contact from './components/Contact';
import Social from './components/Social';


function App() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Contact />
      <Social />
    </div>
  );
}

export default App;
