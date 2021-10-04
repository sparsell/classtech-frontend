import './App.css';
import Greeting from './components/Greeting';
import SchoolFilter from './components/SchoolFilter'
import GradeFilter from './components/GradeFilter'
import NewStudent from './components/NewStudent'

function App() {
  return (
    <div className="App">
       
       <div className="search">
            <div>
                <Greeting />
            </div>

            <div>
                <SchoolFilter />
            </div>

            <div>
                <GradeFilter />
            </div>
        </div>

        <h2> OR:</h2>
        
        <div>
                <NewStudent />
            </div>
      
    </div>
    
  );
}

export default App;
