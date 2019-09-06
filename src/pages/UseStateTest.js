import React, {useState, useEffect} from 'react';

const UseStateTest = ({children, ddd}) => {


    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeId = (e) => {
        setId(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = () => {
        console.log(`<p>당신의 아이디는 ${id} 비번은 ${password}</p>`);
    }

    // useEffect(()=>{
    //     window.addEventListener('scroll', callback);

    //     return () => {
    //         window.removeEventListener('scroll', callback);
    //     }
    // },[])

    // 1 계속실행
    // 2 한번실행
    // 3 제거


    return (
        <div>
            <p>{children}</p>
            <p>{ddd}</p>

            <div>
                당신의 ID : {id} <br/>
                당신의 PW : {password}
                <p>
                    <input
                        value={id}
                        onChange={handleChangeId}
                        type="text"
                    />
                </p>
                <p><input value={password} onChange={handleChangePassword}type="password"/></p>
                <p><button onClick={onSubmit} type="button">로그인</button></p>
            </div>
        </div>
    )
}

export default UseStateTest;