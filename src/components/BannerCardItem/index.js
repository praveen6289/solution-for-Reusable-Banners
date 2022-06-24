// Write your code here.
import './index.css'

const BannerCard = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCard
