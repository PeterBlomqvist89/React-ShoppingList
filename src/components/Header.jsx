export const Header = ({ clearList }) => {
  return (
    <header className="header">
        <h1>Shopping List</h1>
        <button onClick={clearList} className="clear-btn">Clear List</button>
    </header>
  )
}