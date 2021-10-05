import './App.css';
import './index.css'
import Greeting from './components/Greeting';
import SearchExisting from './components/SearchExisting'
import NewStudent from './components/NewStudent'

function App() {
  return (
    <div className="App">
       
            <div className="wrapper">
                <Greeting />
            </div>

            <div>
                <SearchExisting />
            </div>
        

        <h2>--- OR ---</h2>
        
            <div>
                <NewStudent />
            </div>
      
    </div>
    
  );
}

export default App;
