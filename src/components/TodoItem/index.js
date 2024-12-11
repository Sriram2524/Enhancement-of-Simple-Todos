// Write your code here
import './index.css'

const TodoList = props => {
  const {details, deleteItem} = props
  const {title, id} = details
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <div className="button-con">
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoList
