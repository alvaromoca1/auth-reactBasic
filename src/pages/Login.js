import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { Button, Container, Form } from 'semantic-ui-react'
import {Signin} from '../services/Authemtification'
const Login= ()=>{
    const navigate = useNavigate();
    const[state,setState]= useState({
        email:"",password:"",error:""
    });
    const doLogin= async(event)=>{
        event.preventDefault();
        await Signin(state.email,state.password)
            .then(
                ()=>{
                    navigate('/register')
                },
                error => {
                    setState({error: "Can not signin successfully ! Please check username/password again"});
                }
            );
    };
    const changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setState({...state,[nam]: val});
    };

    const styles={
        login:{
            height:'100vh',
            background:'#222831'
        },
        login_card:{
            background:'#EEEEEE',
            padding:'30px 15px',
            width:'50%',
            borderRadius:'10px',
        }
    };
    return(
        <div style={styles.login}>   
            <Container style={{height:'100vh',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Form style={styles.login_card} onSubmit={doLogin}>
                    <Form.Field>
                        <label>Correo</label>
                        <input placeholder='example@example.com' name="email" value={state.email || ''} onChange={changeHandler} />
                    </Form.Field>
                    <Form.Field>
                        <label>Contraseña</label>
                        <input placeholder='*********' name="password" value={state.password || ''} onChange={changeHandler} />
                    </Form.Field>
                    <p>{state.error}</p>
                    <Button type='submit'>Login</Button>
                </Form>
            </Container>  
        </div>
    )
}
export default Login;