import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p>Esta es la app del curso fullstack</p>
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='yellow' message='Estamos trabajando' />
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color='red' message='de react.'/>
      <Description />
    </div>
  );
}

export default App;
