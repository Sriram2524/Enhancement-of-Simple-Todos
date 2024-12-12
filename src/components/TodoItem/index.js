// Write your code here
import {Component} from 'react'
import './index.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // Destructure details directly in the constructor
    const {title} = props.details
    this.state = {
      isEdit: false,
      isChecked: false,
      taskTitle: title, // Initialize taskTitle from props
    }
  }

  onChangeUpdate = event => {
    this.setState({taskTitle: event.target.value})
  }

  onClickCheckInput = event => {
    this.setState({isChecked: event.target.checked})
  }

  editSave = () => {
    this.setState({isEdit: true})
  }

  render() {
    const {isEdit, isChecked, taskTitle} = this.state
    const {details, deleteItem, onEditedTast} = this.props
    const {id, title} = details
    const onDelete = () => {
      deleteItem(id)
    }
    const onSaveEditTask = () => {
      this.setState({isEdit: false})
      onEditedTast(id, taskTitle)
    }
    return (
      <li className="list">
        {isEdit ? (
          <div>
            <input
              className="edit-input"
              value={taskTitle}
              onChange={this.onChangeUpdate}
              type="text"
            />
            <button
              onClick={onSaveEditTask}
              type="button"
              className="save-edit-btn"
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <div>
              <input
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={this.onClickCheckInput}
              />
              <p htmlFor={id}>{title}</p>
            </div>
            <button onClick={this.editSave} type="button">
              Edit
            </button>
          </div>
        )}

        <div className="button-con">
          <button className="button" type="button" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoList
