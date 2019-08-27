import React, { useState } from 'react';

const SignUp = () => {
    
    const [valueId, setValueId] = useState('');
    const [ valuePassword, setValuePassword ] = useState('');
    // const [ valueId, setValueId ] = useState('');
    // const [ valuePassword, setValuePassword ] = useState('');
    
    const handleValueId = (e) => {
         //return console.log(e.target.value);
        setValueId(e.target.value);
    }

    const handleValuePassword = (e) => {
         //return console.log(e.target.value);
        setValuePassword(e.target.value);
    }

    const onSubmit = (e) => {

        e.preventDefault();
        console.log(`아이디 ${valueId} 이고 비번은 ${valuePassword}`);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
            <p>
                <input 
                    type="text"
                    className={`input-default`}
                    value={valueId}
                    onChange={handleValueId}
                    placeholder="아이디입력"/>
            </p>

            <p>
                <input
                    type="password"
                    className={`input-default`}
                    value={valuePassword}
                    onChange={handleValuePassword}
                    placeholder="비밀번호입력"/>
            </p>
            
            <p><button className={`button-default`}
            onClick={onSubmit}
            type="button">회원가입</button></p>

            </form>
        </div>
    )
}

export default SignUp;