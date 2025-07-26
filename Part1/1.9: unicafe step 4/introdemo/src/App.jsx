import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => (
  <>    
    <p>Good: {props.good}</p>
    <p>Neutral: {props.neutral}</p>
    <p>Bad: {props.bad}</p>
    <p>Total: {props.good + props.neutral + props.bad}</p>
    <p>Average: {(props.good - props.bad) / (props.good + props.neutral + props.bad)}</p>
    <p>Positive: {props.good > 0 ? (props.good / (props.good + props.neutral + props.bad) * 100) + '%' : '0%'}</p> 
  </>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      {good + neutral + bad === 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad} />}      
    </div>
  )
}

export default App