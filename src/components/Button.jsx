import React from 'react'

const Button = ({ bgColor, borderRadius, color, size, text }) => {
    return (
        <button
            type='button'
            style={{ color, backgroundColor: bgColor, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            { text }
        </button>
    )
}

export default Button