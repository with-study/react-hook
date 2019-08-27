import React, { useState } from 'react';

//rafce
//value와 onchange 는 짱이다. input text 에서
//네이밍 명사형 동사형
// 커스텀훅 

const SignUp = () => {
    const [ valueId , setValueId ] = useState('niki');
    const [ valuePassword , setValuePassword ] = useState('');

    const handleValueId = (e) => {
        setValueId(e.target.value)
    }

    const handleValuePassword = (e) => {
        setValuePassword(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        return console.log(`valueId 는 ${valueId} 이고 valuesPassword 는 ${valuePassword} 입니다`)
    }


    return (
        <div>
            <form>
                <p><input className={`ddd`} type="text" value={valueId} onChange={handleValueId} /></p>
                <p><input className={`input-default`} type="password" value={valuePassword} onChange={handleValuePassword} /></p>
                <p><button type="button" className={`button-default`} onClick={onSubmit}>로그인</button></p>
            </form>
        </div>
    )
}

export default SignUp