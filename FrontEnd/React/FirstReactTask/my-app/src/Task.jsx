import { useState, useEffect, useRef } from "react";

const Task = () => {

    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [text, setText] = useState("");
    const nicknameRef = useRef(null);
    const passwordRef = useRef(null);
    
    const hack = () => {
        const nicknameInput = nicknameRef.current.value
        const passwordInput = passwordRef.current.value

        setNickname(nicknameInput);
        setPassword(passwordInput);
    }

    useEffect(() => {
        if(nickname === "Nebuchadnezzar" && password === "12345") {
            setText("Hack Olundu")
        }else if(nickname === "Nebuchadnezzar") {
            setText("Nickname Hack Olundu")
        } else if(password === "12345") {
            setText("Password Hack Olundu")
        }
    }, [nickname,password])


    return (
        <div className="form-group">
            <label for="">Nickname</label>
            <br />
            <input ref={nicknameRef} type="text" name="nickname" id="nickname" class="form-control text-black" />
            <br />
            <br />
            <label for="≈">Password</label>
            <br />
            <input ref={passwordRef} type="text" name="password" id="password" class="form-control text-black" />
            <br />
            <br />
            <input type="submit" value="Hack" onClick={ hack } />
            <br />
            <br />
            <div className="text">{text}</div>
        </div>

    )
}

export default Task;
