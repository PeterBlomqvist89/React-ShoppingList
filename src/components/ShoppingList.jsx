import { ListItem } from './ListItem'



export const ShoppingList = ({ items, removeItem, toggleComplete, changeItemText }) => {
  return (
    <div className="ShoppingList">
      {
        items.length 
        ? items.map(item => <ListItem key={item.id} item={item} removeItem={removeItem} toggleComplete={toggleComplete} changeItemText={changeItemText}/>)
        : <p className='header'>No items here.. Add some to start shopping!</p>
      }
      
    </div>
  )
}