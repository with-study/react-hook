import React, { useState, useEffect } from 'react';


const UseStateTest = ({children, ddd}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeId = (e) => {
        console.log(e.target.value);
        setId(e.target.value)
    }
    const handleChangePasword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }
    const onSubmit = (e) => {
        console.log(`당신의 아이디는 ${id} 비번은 ${password}`)
    }

    useEffect(()=>{
        console.log('11111');
        return () => {
            
        }
    },[id, password])

// useEffect(()=>{
//     console.log('11111');
//     return () => {
        
//     }
// },[])


    // 계속실행
    // 한번실행
    // 제거

    return (
        <div>
            {children}
            {ddd}

            <div>
                <p>당신의  Id : {id} </p>
                <p>당신의  password : {password} </p>
                <p><input type="text" value={id} onChange={handleChangeId} /></p>
                <p><input type="password" value={password} onChange={handleChangePasword} /></p>
                <p><button type="button" onClick={onSubmit}>로그인</button></p>
            
            </div>
        </div>
    )
}

export default UseStateTest;