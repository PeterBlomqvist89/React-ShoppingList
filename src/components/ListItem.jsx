import { useState } from "react"

export const ListItem = ({ item, removeItem, toggleComplete, changeItemText }) => {

  const [change, setChange] = useState(false)

  const toggleChangeVisibility = () => {
    setChange(state => !state)
  }

  const onRemoveItem = () => {
    removeItem(item.id)
  }

  const onToggleComplete = () => {
    toggleComplete(item)
  }

  const onChangeText = (newText) => {
    changeItemText(item.id, newText)
    setChange(false)
  }

  return (
    <div className="list-item">
      {
        change
        ? <ChangeForm item={item} onChangeText={onChangeText}/>
        : <p onClick={onToggleComplete} className={`product-title ${item.completed && `completed`}`}>{item.product}</p>
      }
      <div className="buttons">
        <button onClick={toggleChangeVisibility} className="btn change-btn"><i className="fa-solid fa-pen"></i></button>
        <button onClick={onRemoveItem} className="btn delete-btn"><i className="fa-solid fa-trash"></i></button>
      </div>
    </div>
  )
}


const ChangeForm = ({ item, onChangeText }) => {

  const [text, setText] = useState(item.product)

  const handleSubmit = e => {
    e.preventDefault()
    onChangeText(text)
  }

  return (
    <form onSubmit={handleSubmit} className="change-form">
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
      <button className="btn btn-check"><i className="fa-solid fa-circle-check"></i></button>
    </form>
  )
}