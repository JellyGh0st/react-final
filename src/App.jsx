import './App.css';
import 'normalize.css';
import { Routes, Route} from 'react-router-dom';



function App() {
  return (
  <>
    <Header/>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/login" element={<Login/>} />
      
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
