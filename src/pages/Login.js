import { useState } from "react"
import axios from "axios"
import { LOGIN_API } from "../my-config"

export default function Login() {
    const [formData, setFormData] = useState({
        account: "",
        password: "",
    })

    const handler =e =>{
        const id =e.currentTarget.id
        const val = e.currentTarget.value
        //console.log({id, val}); 

        setFormData({...formData, [id]: val})
    }

    const mySubmit = async (e)=>{
        e.preventDefault();
        const response = await axios.post(LOGIN_API, formData);

        console.log(response);
    }
    
    return (
    <div className="container"> 
        <div className="row"> 
        <div className="col-lg-6">
        <form onSubmit={mySubmit}>
        <div className="mb-3">
            <label htmlFor="account" className="form-label">Account</label>
            <input type="text" className="form-control" id="account" onChange={handler} value={formData.account}/>
        </div>
  
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={handler} value={formData.password}/>
        </div>

        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">Check me out</label>
        </div>
  
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
        
        </div>
    </div>
    
    )}