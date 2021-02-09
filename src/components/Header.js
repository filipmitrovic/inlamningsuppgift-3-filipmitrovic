import React from 'react'

function Header() {
    return (
        <div style={divStyling}>
            <h1>Välkommen</h1>
        </div>
    )
}

const divStyling = {
    backgroundColor: '#E5E5E5',
    padding: '1px',
    textAlign: 'center',
    marginBottom: '50px'
}

export default Header;
