import {useState} from 'react'
import './App.css'

function App() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [err,setErr] = useState("")
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleClick = () => {
        if(form.email&&form.password) setErr("All required fields are filled")
        else setErr("Please fill all the fields")
    }
    return (
        <>
            <p>{err}</p>
            <table>
                <tr>
                    <td><label htmlFor="email">Email: </label></td>
                    <td><input type="text" id="email" name="email"
                               value={form.email} onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="password">Password: </label></td>
                    <td><input type="password" id="password" name="password"
                               value={form.password} onChange={handleChange}/></td>
                </tr>
            </table>
            <div>
                <button onClick={handleClick}>Log in</button>
            </div>
        </>
    )
}

export default App
