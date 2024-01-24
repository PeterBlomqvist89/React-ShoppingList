export const Modal = ({ clearList, onBack }) => {
  return (
    <div className="modal-bg">
        <div className="modal">
            <h2>Warning</h2>
            <p>Are you sure you want to remove all items?</p>
            <div className="modal-buttons">
                <button onClick={clearList}>Yes</button>
                <button onClick={onBack}>Back</button>
            </div>
        </div>
    </div>
  )
}