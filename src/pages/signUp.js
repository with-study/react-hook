import React from 'react';

const signUp = () => {
    return (
        <div>
            <p><input type="text" className={`input-default`} placeholder="아이디입력"/></p>
            <p><input type="password"className={`input-default`} placeholder="비밀번호입력"/></p>
            <p><button className={`button-default`} type="button">회원가입</button></p>




            
        </div>
    )
}

export default signUp;