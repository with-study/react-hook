import React, { useState } from 'react';

const SignUp = () => {

    const [valueId, setValueId] = useState('');
    const [valuePassword, setValuePassword] = useState('');

    const handleValueId = (e) => {
        setValueId(e.target.value);
    }

    const handleValuePassword = (e) => {
        setValuePassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`valueId는 ${valueId} 이고 valusPassword는 ${valuePassword} 입니다`);
    }

    return (
        <div>
            <form>
                <p>
                    <input
                        className={`input-default`}
                        type="text"
                        value={valueId}
                        onChange={handleValueId}
                        placeholder="아이디 입력" />
                </p>
                <p>
                    <input
                        className={`input-default`}
                        type="password"
                        value={valuePassword}
                        onChange={handleValuePassword}
                        placeholder="비밀번호 입력" />
                </p>
                <p>
                    <button 
                        className={`button-default`}
                        type="button"
                        onClick={onSubmit}
                        >
                        회원가입
                    </button>
                </p>
            </form>
        </div>
    )
}




export default SignUp;
