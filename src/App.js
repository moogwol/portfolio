import './App.css';
import Banner from './banner';
import Group from './cardgroup'
import Navigation from './nav'


function App() {
  return (
    <div className="container-fluid">
      <Navigation />
      <Banner />
      <Group />
    </div>
  );
}

export default App;
