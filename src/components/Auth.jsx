import styled from "styled-components";
import axios from "axios";
import React,{useState,useEffect} from "react";


const Auth=()=>{
    const [auth, set_auth] = useState(false);
    const [user, set_user] = useState({})
    const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb21lIjoib3RoZXIgdmFsdWUiLCJpYXQiOjE2MjA0Njc3MjMsImV4cCI6MTYyMDU1NDEyM30.cVgxQkbRcQ1POONoDjNK1XUAOVOWfX4HyTHififkHzM";
    useEffect(() => {
        const getUser=async()=>{
            const {data}=await axios.get('http://localhost:3030/api/users/134');
            set_user(data);
                }
            getUser();
    }, [])
    const handle_login=async()=>{
        try{
            // const data=await axios.get(`http://localhost:3030/api/auth/login`)
            const {data}=await axios({
                method: 'post',
                url: `http://localhost:3030/api/auth/login`,
                headers: {"x-access-token":token}, 
                data: {
                  "email": "talGold@post.bgu.com",
                  "password":"55555"
                }
              });
              data.auth ?  set_auth(true) : set_auth(false);
              

        }catch(err){
            set_auth(false);
            console.log("login failed",err);
        }
    }
  
    return(
        <Div>
            <H1>Auth Demo</H1>
            <H2>Authenticated: {auth ? "true" :"false"}</H2>
            <P>User:
                {/* {auth ? JSON.stringify(user).split(",").join(",\n") : null} */}
                {auth && `
                    {
                        "id":${user.id},
                        "first_name":${user.first_name},
                        "last_name":${user.last_name},
                        "email":${user.email}
                    }
                `}
            </P>
            <button onClick={handle_login}>Login</button>
            <H3>{auth && "protected data" }</H3>
        </Div>
    )
}
export default Auth;
const Div=styled.div`

background-color:#282c34;

`;
const H1=styled.h1`
color:white;
font-size:40px;
`;
const H2=styled.h2`
    color:white;
    font-size:30px;
`;
const H3=styled.h3`
color:white;
font-size:20px;
`;
const P=styled.p`
color:white;
font-size:20px;
`;