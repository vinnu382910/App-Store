// Write your code here
import './index.css'

const AppDetails = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails
  return (
    <li className="list-cont">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-para">{appName}</p>
    </li>
  )
}

export default AppDetails
