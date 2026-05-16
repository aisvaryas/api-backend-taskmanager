import { useState } from 'react';
import { registerUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Register=()=>{
    let nav=useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await registerUser(formData);
            message.success('Registered Successfully!');
            nav("/")

        }catch(error){
            message.error('Register failed. try again');
        }
    };
   
    return(

    <div className="welcome-page">

        <div className="welcome-left">

            <h1>Task Manager</h1>

        </div>

        <div className="login-drawer">

            <form
                className="auth-card"
                onSubmit={handleSubmit}
            >

                <h2>Create Account</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <div className="auth-buttons">

                    <button type="submit">
                        Register
                    </button>
                </div>

            </form>

        </div>

    </div>
);
    
}

export default Register;