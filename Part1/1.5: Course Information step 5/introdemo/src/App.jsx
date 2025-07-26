const App = () => {

const Header = (props) => {
    console.log(props)
  return (
    <>
      <div>
        {props.course.name}
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
      <Part part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part part={course.parts[2].name} exercises={course.parts[2].exercises} />
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
  
  const course = {    
    name: 'Half Stack application development', 
    number: 'Number of exercises',   
    parts: [
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
    ],
     total: function() {
      return this.parts[0].exercises + this.parts[1].exercises + this.parts[2].exercises    
   },
  }
  
  return (
    <div>
      <h1> <Header course={course} /></h1>
        
        <Content parts={course} />
      
        <Total number={course.number} total={course.total()} />
    </div>
  )
}

export default App