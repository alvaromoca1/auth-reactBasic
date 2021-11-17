import React, {useState} from "react";
import { Button, Container, Form } from 'semantic-ui-react'
const Login= ()=>{
    const[state,setState]= useState({
        email:"",password:""
    })

    const changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        setState({[nam]: val});
    }

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
    }
    return(
        <div style={styles.login}>   
            <Container style={{height:'100vh',display:'flex',justifyContent: 'center',alignItems: 'center'}}>
                <Form style={styles.login_card}>
                    <Form.Field>
                        <label>Correo</label>
                        <input placeholder='example@example.com' name="email" value={state.email} onChange={changeHandler} />
                    </Form.Field>
                    <Form.Field>
                        <label>Contraseña</label>
                        <input placeholder='*********' name="password" value={state.password} onChange={changeHandler} />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
            </Container>  
        </div>
    )
}
export default Login;