import React, { useState } from 'react'

const Registration = () => {
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePw = (event) => {
        setPw(event.target.value);
    };
    const handlePwConfirm = (event) => {
        setPwConfirm(event.target.value);
    };
    const handleSubmitForm = (event) => {
        event.preventDefault();
        if (!email.trim()) {
            return alert("이메일을 제대로 입력하세요!");
        }
        if (!pw.trim()) {
            return alert("비밀번호를 제대로 입력하세요!");
        }
        if (!pwConfirm.trim()) {
            return alert("비밀번호 확인을 제대로 입력하세요!");
        }
        if (pw !== pwConfirm) {
            return alert("비밀번호 확인이 일치하지 않습니다!");
        }
        if (pw.trim().length < 8) {
            return alert("ㅋㅋ끝에다가 공백 넣어도 될 것 같았지?");
        }
        alert(`당신의 이메일 : ${email}, 비밀번호 : ${pw}`);
    };

    return (
        <>
            <h1>회원가입</h1>
            <form onSubmit={handleSubmitForm}>
                <label htmlFor='email'>이메일: </label>
                <input
                    id='email'
                    type='email'
                    placeholder='이메일 입력'
                    required
                    value={email}
                    onChange={handleEmail}
                />
                <br />
                <label htmlFor='pw'>비밀번호: </label>
                <input
                    id='pw'
                    type='password'
                    placeholder='비밀번호 입력'
                    required
                    minLength={8}
                    value={pw}
                    onChange={handlePw}
                />
                <br />
                <label htmlFor='pwConfirm'>비밀번호 확인: </label>
                <input
                    id='pwConfirm'
                    type='password'
                    placeholder='비밀번호를 다시 입력'
                    required
                    minLength={8}
                    value={pwConfirm}
                    onChange={handlePwConfirm}
                />
                <br />
                <button type='submit'>가입</button>
            </form>
        </>
    )
}

export default Registration