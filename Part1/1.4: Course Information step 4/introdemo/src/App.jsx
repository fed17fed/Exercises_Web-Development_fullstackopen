const App = () => {

const Header = (props) => {
    console.log(props)
  return (
    <>
      <div>
        {props.course}
      </div>
    </>
  )
}

const Part = (props) => {  
  console.log(props)
  return (
    <>
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    </>
  )
}

const Content = (props) => {  
  console.log(props)
  return (
    <>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </>
  )
}

const Total = (props) => {  
  console.log(props)
  return (
    <>
      <div>
        <p>{props.number} {props.total} </p>
      </div>
    </>
  )
}
  
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]  
  const number='Number of exercises'
  const total=parts[0].exercises + parts[1].exercises + parts[2].exercises
  
  return (
    <div>
      <h1> <Header course={course} /></h1>
        
        <Content parts={parts} />
      
        <Total number={number} total={total} />
    </div>
  )
}

export default App