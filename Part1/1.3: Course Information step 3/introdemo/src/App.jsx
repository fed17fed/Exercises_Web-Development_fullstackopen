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
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <div>
      <h1> <Header course={course} /></h1>
        
        <Content />
      
        <Total number='Number of exercises' total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App