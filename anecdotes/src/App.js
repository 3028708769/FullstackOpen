import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [points, setPoints] = useState({ 0: 1, 1: 3, 2: 4, 3: 2 })
  const [selected, setSelected] = useState(0)
  const copy = { ...points }
  const handlVote = () => {
    copy[selected] += 1
    setPoints(copy)
    console.log(selected)
    console.log(copy[0])
    console.log(copy)
  }
  const handlNextAne = () => {

    if (selected === anecdotes.length - 1) {
      setSelected(0)
    } else
      setSelected(selected + 1)
  }
  return (
    <div>
      <h4>{anecdotes[selected]}</h4>
      <p>has {copy[selected]} votes</p>
      <Button handl={handlVote} value="vote" />
      <Button handl={handlNextAne} value="next anecdotes" />
    </div>
  )
}
const Button = (props) => <button onClick={props.handl}>{props.value}</button>
export default App