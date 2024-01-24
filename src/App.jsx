import { useState } from "react";

import { AddItemForm } from "./components/AddItemForm";
import { Header } from "./components/Header";
import { ShoppingList } from "./components/ShoppingList";
import { Modal } from "./components/Modal";

export default function App() {

  const [showModal, setShowModal] = useState(false)


  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      product: 'Bread',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Milk',
      completed: false
    },
    {
      id: crypto.randomUUID(),
      product: 'Meat',
      completed: false
    }
  ])


  const clearList = () => {
    setItems([])
    setShowModal(false)
  }

  const addItem = (product) => {
    setItems(prevItems => {

      const newItem = {
        id: crypto.randomUUID(),
        product,
        completed: false
      }
      return [newItem, ...prevItems]
    })
  }


  const removeItem = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }



  const changeItemText = (id, newText) => {
    const newItems = items.map(item => {
      if(item.id === id){
        item.product = newText
      }
      return item
    })
    setItems(newItems)
  }






  const toggleComplete = (item) => {

    item.completed = !item.completed
    setItems(prev => {
      prev.sort((a,b) => a.completed - b.completed)
      return [...prev]
  })
}


  return (
    <div className="App container">
      <div className="card">
        <Header clearList={() => setShowModal(true)} />
        
        <ShoppingList items={items} removeItem={removeItem} toggleComplete={toggleComplete} changeItemText={changeItemText}/>
        <AddItemForm addItem={addItem}/>
        { showModal && <Modal clearList={clearList} onBack={() => setShowModal(false)}/>}
      </div>
    </div>
  )
}