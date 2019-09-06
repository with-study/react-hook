import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('마운트 될때만')
    },[]);

    useEffect(() => {
        console.log('effect');
        return () => {
            console.log('cleanup')
        }
    });
    const handleIncrease = () => {
        setValue(value + 1);
    }

    const handleDecrease = () => {
        if (value === 0) return;
        setValue(value - 1);
    }
    return (
        <div>
            <p>현재 카운터 값 <b>{value}</b></p>
            <button type="button" onClick={handleIncrease}>증가</button>
            <button type="button" onClick={handleDecrease}>감소</button>
        </div>
    )
}

export default Counter
