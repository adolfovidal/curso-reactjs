import { useState } from 'react'


function Form() {

    function registerUser(e) {
        e.preventDefault()
        /*  
        window.alert("Registered the user!")
        console.log(name)
        console.log("Registered the user!") 
        */
       console.log(`The user ${name} has been registered with the password: ${password}`) // Poste para o backend (banco de dados)
    }

    const[name, setName] = useState('Paula')
    const[password, setPassword] = useState()

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}> 
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Type your name" 
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Passw:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <div>
                    <input type="submit" value="register" />
                </div>
            </form>
        </div>
    )
}

export default Form