import { useState } from 'react';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
const Login = () => {

    const nav = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };

    const handleSubmit = async(e) => {

        e.preventDefault();

        try{

            await loginUser(formData);

           message.success('Login Successful');

            nav('/tasks/create');

        }catch(error){

            message.error('Invalid Credentials');
        }
    };

    const handleView = () => {
        nav('/register');
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
                    <h2>Welcome Back</h2>
                   
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
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={handleView}
                        >
                            Register
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default Login;
