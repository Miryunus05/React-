import { useState } from 'react';


const Cards = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button>+</button>
            <button>-</button>
        </div>
    )
}

