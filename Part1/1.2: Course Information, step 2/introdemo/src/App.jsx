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
      <Part part={content[0].part1} exercises={content[0].exercises1} />
      <Part part={content[1].part2} exercises={content[1].exercises2} />
      <Part part={content[2].part3} exercises={content[2].exercises3} />
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
  const content = [
    { part1: 'Fundamentals of React', exercises1: 10 },
    { part2: 'Using props to pass data', exercises2: 7 },
    { part3: 'Using props to pass data', exercises3: 14 },
  ]
  
  return (
    <div>
      <h1> <Header course={course} /></h1>
        
        <Content />
      
        <Total number='Number of exercises' total={content[0].exercises1 + content[1].exercises2 + content[2].exercises3} />
    </div>
  )
}

export default App