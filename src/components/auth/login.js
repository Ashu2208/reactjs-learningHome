import React from 'react'
import "./login.css"
import { } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchemaLogin } from "../../util/schema"
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchemaLogin)
    });

    const onSubmit = (data) => {

    }

    return (
        <div className='loginContainer'>
            <div className='bg-dark inputContainer'>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex-column align-items-center justify-content-center' >

                    <p className="text-primary text-center font-monospace" >Login to Account</p>
                    <input className='m-1 p-1 w-100' type="text" placeholder='Username'
                        {...register("username", { required: true, maxLength: 20 })}
                    />
                    <p className='m-1 p-1 text-white'>{errors.username?.message}</p>

                    <input className='m-1 p-1 w-100' type="text" placeholder='password'
                        {...register("password", { required: true, min: 6, max: 20 })}
                    />
                    <p className='text-white'>{errors.password?.message}</p>

                    <button className='w-100 m-1 p-1' type="submit">Login</button>

                    <p className=' text-center text-warning'>Not Registered?</p>

                </form>

                <Link to={"signup"} style={{ color: "inherit", textDecoration: "inherit", width: "100%" }} >
                    <button className='w-100 m-1 p-1'>Register Here</button>
                </Link>
            </div>
        </div>
    )
}

export default Login