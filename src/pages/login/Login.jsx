import { useContext, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./login.scss"
import { AuthContext } from "../../context/AuthContext";

const Login = () => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigateTo = useNavigate()

    const {dispatch} = useContext(AuthContext)

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navigateTo("/")
            })
            .catch((error) => {
                setError(true)
                // ..
            });
    }

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="User Email" onChange={e=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}></input>
                <button type="submit">LOGIN</button>
                {error && <span>Wrong email or password!</span>}
            </form>
        </div>
    )
}

export default Login