
import './App.css';
import Mensaje from './Mensaje.js';
import Partes from './Partes.js';
import Descipcions from './Descripcions.js';


const Title = ({ course }) => <h1>{course}</h1>
//const ParteUno = ({ parte1 }) => <h2>{parte1}</h2>

const App = () => {
  const course = 'Full Stack BonfireCamp Charly Duque'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course} />
      <p>
        <Partes contenido={part1} />
        <Descipcions contenido={exercises1} />
      </p>
      <p>
        <Partes contenido={part2} />
        <Descipcions contenido={exercises2} />
      </p>
      <p>
        <Partes contenido={part3} />
        <Descipcions contenido={exercises3} />
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <Mensaje color='blue' name='Charly' />
      <Mensaje color='orange' name='Bonfire' />
    </div>
  )
}

export default App;
