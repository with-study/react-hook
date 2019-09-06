import React, {useState, useEffect} from 'react';
import Counter from './Counter'

const EffectSample = () => {
    const [visible, setVisible] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>
                {visible ? 'hide' : 'show'}
            </button>
            {visible && <Counter />}
        </div>
    )
}

export default EffectSample