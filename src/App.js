import './App.css';
import Banner from './banner';
import Group from './cardgroup'
import Navigation from './nav'


function App() {
  return (
    <div className="container-fluid" id="main-container">
      <Navigation />
      <Banner className="banner"/>
      <Group />
    </div>
  );
}

export default App;
