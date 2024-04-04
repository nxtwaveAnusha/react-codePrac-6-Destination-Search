import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {imgUrl, name} = destinationsList
  return (
    <li className="list-item">
      <div className="card-con">
        <img src={imgUrl} className="img-size" alt={name} />
        <p className="des-name">{name}</p>
      </div>
    </li>
  )
}
export default DestinationItem
