import React, { useState } from 'react'
import * as  axios  from 'axios';
import { apiurl } from './../utiels/helper';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [dataLogin,setDataLogin]= useState({email:'',password:''});
  let navigate = useNavigate();


    const changeData=(e)=>{
        setDataLogin((pre)=>({...pre,[e.target.name]:e.target.value}));
    }
    const submitForm=(e)=>{
        e.preventDefault();
        axios({
            method:'post',
            url:`${apiurl}login`,
            headers:{
                "Content-Type":'multipart/form-data'
              },
            data:{
                ...dataLogin
            }
        })
        .then((res)=>{
        localStorage.setItem("testToken",res.data.token);
        navigate("/");
        })
        .catch((err)=>console.log("Error:",err))
    }
  return (
    <div>
        <form onSubmit={submitForm} >
            <label htmlFor='email' >Email</label>
            <input type='email' required id="email" name="email" onChange={changeData} />
            <br/>
            <label htmlFor='password'  >password</label>
            <input type='password' required id="password" name="password" onChange={changeData} />
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login