import PropTypes from "prop-types"

export default function Dice({selected=false, children, freeze}) {
    return <div onClick={freeze} className={`w-9 h-9 rounded-[4px] shadow-dice ${selected ? "bg-[#59E391]": "bg-white"} flex items-center justify-center`}>
        {children}
    </div>
}

Dice.propTypes = {
    selected: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    freeze: PropTypes.func
}