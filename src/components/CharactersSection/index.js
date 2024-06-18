import './index.css'

const CharactersSection = props => {
  const {Details} = props
  const {name, count} = Details
  return (
    <li className="list">
      <p className="count-character">
        {name}: {count}
      </p>
    </li>
  )
}
export default CharactersSection
