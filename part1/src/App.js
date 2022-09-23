import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(5)
  const [neutral, setNeutral] = useState(2)
  const [bad, setBad] = useState(1)
  const [mark, setMark] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = (good / all * 100)
  const handlGood = () => {
    setGood(good + 1)
    setMark(1)
  }
  const handlBad = () => {
    setBad(bad + 1)
    setMark(1)
  }
  const handlNeutral = () => {
    setNeutral(neutral + 1)
    setMark(1)
  }
  return (
    <div>
      <h1>Give feedback</h1>
      {/* 在事件处理程序内部使用stateful状态 （一般不推荐在JSX模板中定义事件处理程序，需要将事件处理程序封装为一个独立的函数）*/}
      <Button handl={handlGood} value="good" />
      <Button handl={handlNeutral} value="neutral" />
      <Button handl={handlBad} value="bad" />
      <h1>Statistics</h1>
      <Statistic mark={mark} good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}
// 定义的数据组件
const Statistic = (props) => {
  if (props.mark === 1) {
    return (
      <div>
        <table>
          <tr><StatisticLine name="good" data={props.good} /></tr>
          <tr><StatisticLine name="neutral" data={props.neutral} /></tr>
          <tr><StatisticLine name="bad" data={props.bad} /></tr>
          <tr><StatisticLine name="all" data={props.all} /></tr>
          <tr><StatisticLine name="average" data={props.average} /></tr>
          <tr><StatisticLine name="positive" data={props.positive + "%"} /></tr>
        </table>
      </div>
    )
  }
  return (
    <h2>No feedback given</h2>
  )
}
// 数据显示的组件
const StatisticLine = (props) => <p><th>{props.name}</th> <td>{props.data}</td></p>
// 按钮定义用于提交反馈
const Button = (props) => <button onClick={props.handl}>{props.value}</button>

export default App