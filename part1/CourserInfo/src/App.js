
import './App.css';
import Mensaje from './Mensaje.js';

const Title = ({ course }) => <h1>{course}</h1>


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
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
      <Mensaje color='blue' name='Charly' />
      <Mensaje color='orange' name='Bonfire' />
    </div>
  )
}

export default App;
