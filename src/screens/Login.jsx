import { imageURL } from "hooks";
import useLocalStorage from "hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const [role,setRole] = useLocalStorage('role','');
    const [email,setEmail] = useState('crypto@gmail.com');
    const [password,setPassword] = useState('12345678')
    const navigate = useNavigate();
    const login = async (role) =>{
        setRole(role);
        if(role == "user"){
            window.location.href = '/user/dashboard'
        }
        else{
            window.location.href = '/'
        }
    }

    return <>
        <main className="login-main w-100">
            <div className="custom-form center-form">
                <Form>
                    {/* <h3 className="section-title text-center">Crypto Bot</h3> */}
                    <div className="form-logo-main">
                    <img src={imageURL('logo.png')} alt="" />
                    </div>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" className="custom-input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" className="custom-input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <div >
                        <button className="custom-btn primary-btn" type="button" onClick={()=>login('user')}>Login as User</button>
                        <button className="custom-btn primary-btn" type="button" onClick={()=>login('admin')} style={{marginLeft:'15px'}}>Login as Admin</button>
                    </div>
                </Form>
            </div>
        </main>
        
    </>
}