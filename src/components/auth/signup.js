import React from 'react'
import "./login.css"
import { } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaLogin } from "../../util/schema"
import { registerUser } from "../../redux/Actions"
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';



const Signup = () => {
    const dispatch = useDispatch();
    const { getValues, register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchemaLogin)
    });

    const signupUser = () => {
        let username = getValues("username");
        let password = getValues("password");
        dispatch(registerUser(username, password))
    }

    return (
        <div className='loginContainer'>
            <div className='bg-dark inputContainer'>
                <form onSubmit={handleSubmit(signupUser)} className='d-flex-column align-content-center justify-content-center' >

                    <p className="text-primary text-center font-monospace" >Signup for New Journey with Us</p>
                    <input className='m-1 p-1 w-100' type="text" placeholder='Username'
                        {...register("username", { required: true, maxLength: 20 })}
                    />
                    <p className='m-0 p-0 text-white'>{errors.username?.message}</p>

                    <input className='m-1 p-1  w-100' type="text" placeholder='password'
                        {...register("password", { required: true, min: 6, max: 20 })}
                    />
                    <p className='text-white'>{errors.password?.message}</p>
                    <button className='w-100 m-1 p-1' type="submit">Register</button>
                    <p className=' text-center text-warning'>Already a Member?</p>

                </form>

                <Link to={"signup"} style={{ color: "inherit", textDecoration: "inherit", width: "100%" }} >
                    <button className='w-100 m-1 p-1'>Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Signup