import React, {useState, useEffect} from 'react';


const UseState = () => {

    const [value, setValue] = useState('');

    return (
        <div>
            {value}
        </div>
    )
}

export default UseState
