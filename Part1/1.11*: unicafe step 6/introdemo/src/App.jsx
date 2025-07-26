import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return(
    <>
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
    </>
  )
}

const Statistics = (props) => (
  <>    
   <table>
    <tbody>
    <StatisticLine text="Good" value={props.good} />
    <StatisticLine text="Neutral" value={props.neutral} />
    <StatisticLine text="Bad" value={props.bad} />
    <StatisticLine text="Total" value={props.good + props.neutral + props.bad} />
    <StatisticLine text="Average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
    <StatisticLine text="Positive" value={props.good > 0 ? (props.good / (props.good + props.neutral + props.bad) * 100) + '%' : '0%'} />
    </tbody>
   </table>     
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