//import logo from './logo.svg';
import './App.css';
import SayMyName from './components/SayMyName';
import People from './components/People';
import Frase from './components/Frase';

function App() {
   const name = "Laura"

  return (
    <div className='App'>
      <h1>Testando CSS</h1>
      <Frase />
      <Frase />
      <SayMyName name="Paula" />
      <SayMyName name="Pingo" />
      <SayMyName name={name} />
      <People 
        name= "Paula" 
        age="34" 
        profession="Confectioner" 
        photo="https://via.placeholder.com/150"
        />
    </div>
  );
}

export default App;
