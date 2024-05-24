import './App.css';
import Sidenav from './side/Sidenav'
import Content from './main/Content'

function App() {
  return (
    <div className="App">
       <div className="homepage__nav"><Sidenav/></div> 
       <div className="homepage__content"><Content/></div>
    </div>
  );
}

export default App;
