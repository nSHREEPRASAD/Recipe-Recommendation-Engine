import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Recipe from './Components/Recipe/recipe';
import Recommendation from './Components/Recommendation/recommendation';
import Navbar from './Components/Navbar/navbar';
import Recipeinfo from './Components/Recipeinfo/recipeinfo';
import Recipeinfo1 from './Components/Recipeinfo/recipeinfo1';
import Recipeinfo2 from './Components/Recipeinfo/recipeinfo2';
import Recipeinfo3 from './Components/Recipeinfo/recipeinfo3';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>

        <Route path='/recipeinfo' element={<Recipeinfo></Recipeinfo>}></Route>
        <Route path='/recipeinfo1' element={<Recipeinfo1></Recipeinfo1>}></Route>
        <Route path='/recipeinfo2' element={<Recipeinfo2></Recipeinfo2>}></Route>
        <Route path='/recipeinfo3' element={<Recipeinfo3></Recipeinfo3>}></Route>
        <Route path='/recipes' element={<Recipe></Recipe>} ></Route>
        <Route path='/' element={<Recipe></Recipe>} ></Route>
        <Route path='/recommendations' element={<Recommendation></Recommendation>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
