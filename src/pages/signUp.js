import React from 'react';

const signUp = () => {
    return (
        <div>
            <p>
                <input
                    className={`input-default`}
                    type="text"
                    placeholder="아이디 입력" />
            </p>
            <p>
                <input
                    className={`input-default`} type="password"
                    placeholder="비밀번호 입력" />
            </p>
            <p>
                <button 
                    className={`button-default`} type="button">회원가입</button></p>
        </div>
    )
}




export default signUp;
