import React, { useState, useEffect } from 'react'
import Counter from './counter';

const EffectSample = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button onClick={() => {
                setVisible(!visible);
            }}>
                {visible ? '숨기기' : '보이기'}
            </button>

            {visible && <Counter />}
        </div>
    )
}

export default EffectSample
