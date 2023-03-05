import PropTypes from 'prop-types'

export default function Dice({ selected = false, children, freeze }) {
  return (
    <div
      onClick={freeze}
      className={`flex h-9 w-9 items-center justify-center rounded-[4px] shadow-dice ${
        selected ? 'bg-[#59E391]' : 'bg-white'
      }`}
    >
      {children}
    </div>
  )
}

Dice.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  freeze: PropTypes.func,
}
