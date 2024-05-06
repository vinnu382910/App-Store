// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, onChange, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickedTab = () => {
    onChange(tabId)
  }
  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-list">
      <button
        type="button"
        className={`tab-button ${activeTabClassName}`}
        onClick={onClickedTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
