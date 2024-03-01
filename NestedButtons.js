import React from 'react';

const NestedButtons = () => {
    const handleOuterClick = () => {
        alert('Outer button clicked!');
    };

    const handleInnerClick = (e) => {
        e.stopPropagation();
        alert('Inner button clicked!');
    };

    return (
        <div>
            <button onClick={handleOuterClick}>
                Outer button
                <button onClick={handleInnerClick} style={{ margin: '10px'}}>
                    Inner Button
                </button>
            </button>
        </div>
    );
};

export default NestedButtons;