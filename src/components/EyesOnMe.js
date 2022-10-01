import React from 'react';

function handleFocus() {
    console.log('Good!')
}
function handleBlur() {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe() {
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>
            Eyes on me
        </button>
    )
}

export default EyesOnMe;

    // return (
    //     <button onFocus={handleFocus} onBlur={handleBlur}>
    //         Eyes on me
    //     </button>