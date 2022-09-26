const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  // 头部标签组件
  const Header = ({ courses }) => {
    let total = 0
    let totalArry = []
    // return < TotalEx total={total} />
    return courses.map((list, index) => {
      for (let i = 0; i < list.parts.length; i++) {

        total = list.parts[i].exercises + total
        // map循环数组时对数组的每一个元素都使用了for循环
        if (i === list.parts.length - 1) {
          totalArry.push(total)
          total = 0
        }
      }
      return <div key={list.id}>
        <h1 key={list.id}>{list.name}</h1>
        <Content courses={list} key={index}></Content>
        <TotalEx total={totalArry[index]}></TotalEx>
      </div>
    })
  }
  // 课程内容组件
  const Content = ({ courses }) => {

    return courses.parts.map(part => <Part key={part.id} part={part}>{part.name}</Part>)
  }
  // 课程内容基础组件
  const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
  // 课程大组件
  const Course = ({ courses }) => <Header courses={courses} />
  // 课程练习总计
  const TotalEx = ({ total }) => <h3>total of {total} exercises</h3>
  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}
export default App
