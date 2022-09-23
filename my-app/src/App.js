import { useState } from 'react'
// const App = () => {
//   console.log('Hello from component')
//   return (
//     <div>
//       <p>Hello world</p>
//     </div>
//   )  
// }
// 组件App
// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return (
//     <div>
//       <p>Hello world, it is {now.toString()}</p>
//       <p>
//         {a} plus {b} is {a + b}
//       </p>
//       <Hello name="jay" />
//       <Hello name="chou" />
//     </div>
//   )
// }
// 当使用两个以上的props时，属性值为Javascript表达式的结果，则prop的值应用大括号包裹
// 可以使用空的元素来包装组件要返回的元素
// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age * 2} />
//     </div>
//   )
// }
// 复杂组件
// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   return (
//     <div>
//       {left}
//       <button onClick={() => setLeft(left + 1)}>
//         left
//       </button>
//       <button onClick={() => setRight(right + 1)}>
//         right
//       </button>
//       {right}
//     </div>
//   )
// }
// 复杂组件的替换
// const App = () => {
//   // const [clicks, setClicks] = useState({
//   //   left: 0, right: 0
//   // })

//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left + 1,
//   //     right: clicks.right
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //     left: clicks.left,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }
//   // 使用...对象传播定义新的状态对象。
//   // const handleLeftClick = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     left: clicks.left + 1
//   //   }
//   //   setClicks(newClicks)
//   // }

//   // const handleRightClick = () => {
//   //   const newClicks = {
//   //     ...clicks,
//   //     right: clicks.right + 1
//   //   }
//   //   setClicks(newClicks)
//   // }
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   // 简化函数 （react禁止直接改变装态，改变状态必须始终通过将状态设置为一个新的对象。）
//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }
//   //   return (
//   //     <div>
//   //       {left}
//   //       <button onClick={handleLeftClick}>left</button>
//   //       <button onClick={handleRightClick}>right</button>
//   //       {right}
//   //       <p>{allClicks.join(',')}</p>
//   //     </div>
//   //   )
//   return (
//     <div>
//       {left}
//       {/* <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button> */}
//       {/* 使用自定义的Button组件实现按钮的点击事件,传入参数bandleClick和text属性 */}
//       <Button handleClick={handleLeftClick} text='left' />
//       <Button handleClick={handleRightClick} text='right' />
//       <Button handleClick={handleLeftClick} text='GNGGZ' />
//       {right}
//       {/* 此处使用定义的组件进行条件渲染 */}
//       <History allClicks={allClicks} />
//     </div>
//   )
// }
// Conditional rendering 条件渲染组件
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
// 对Button组件进行重构，形成新的Button组件
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)
// 组件Hello
const Hello = (props) => {
  return (
    <div>
      <p>Hell you name is {props.name} and aged {props.age}</p>
    </div>
  )
}

{/*重新审视事件处理程序*/ }

const App = () => {
  const [value, setValue] = useState(10)

  return (
    <div>
      {value}
      {/* 为按钮添加事件处理程序 */}
      <button onClick="crap...">reset to zero</button>
      {/* 此时控制台会报错 提示事件监听应为一个函数 */}
    </div>
  )
}
export default App