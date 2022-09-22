import Note from "./components/Note"
const App = (props) => {
  const { notes } = props
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {/* 使用硬编码的索引来访问数组中的对象，从而渲染一个单一的笔记。 */}
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        {/* 使用map对原有的数组对象进行React元素的创建，注意添加key*/}
        {/* {
          // notes.map(note => <li key={note.id}>{note.content}</li>)
          notes.map((note, i) => <li key={i}>{note.content} {note.id} {i}</li>)
        } */}
        {/* 使用组件渲染所有笔记,方法1 */}
        {/* <Note notes={notes}></Note> */}
        {/* 使用组件渲染所有笔记,方法2。注意此处的key是定义在组件上的，而不是li标签中。 */}
        {notes.map(note => <Note key={note.id} note={note}></Note>)}
      </ul>
    </div>
  )
}
// 构建一个笔记组件
// 1、直接在组件内完成所有笔记的map渲染。
// const Note = ({ notes }) => notes.map(note => <li key={note.id}>{note.content}</li>)
// 2、首先将单个笔记封装好，然后在app组件中调用时渲染全部的Note
// const Note = ({ note }) => <li>{note.content}</li>
export default App