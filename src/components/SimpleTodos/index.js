import {Component} from 'react'
import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {inputData: '', userDetails: initialTodosList}

  onChangeInput = event => {
    this.setState({inputData: event.target.value})
  }

  onAddNewTask = () => {
    const {inputData} = this.state
    const uniqueID = Date.now()
    const newArr = {id: uniqueID, title: inputData}
    this.setState(prev => ({
      userDetails: [...prev.userDetails, newArr],
      inputData: '',
    }))
  }

  deleteItem = id => {
    const {userDetails} = this.state
    const filterUserData = userDetails.filter(each => each.id !== id)
    this.setState({userDetails: filterUserData})
  }

  onEditedTast = (id, taskTitle) => {
    const {userDetails} = this.state
    const newArray = userDetails.map(each => {
      if (each.id === id) {
        return {...each, title: taskTitle}
      }
      return each
    })
    this.setState({userDetails: newArray})
  }

  render() {
    const {userDetails, inputData} = this.state
    return (
      <div className="bg-conatainer">
        <div className="card">
          <h1 className="heading">Simple Todos</h1>
          <input
            type="text"
            className="input"
            placeholder="Add Task"
            value={inputData}
            onChange={this.onChangeInput}
          />
          <button
            type="button"
            className="add-button"
            onClick={this.onAddNewTask}
          >
            Add
          </button>
          <ul className="unordered-list">
            {userDetails.map(eachItem => (
              <TodoItem
                deleteItem={this.deleteItem}
                details={eachItem}
                key={eachItem.id}
                onEditedTast={this.onEditedTast}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
