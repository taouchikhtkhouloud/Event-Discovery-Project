import styled from "styled-components";
import { mobile } from "../responsive";
import { Navbar } from "../components";
import { Footer } from "../container";
import { Link } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(0.25turn,#3E0F71,#22B7CE);
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 70%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [prenomReg,setPrenomReg]=useState("");
  const [nomReg,setNomReg]=useState("");
  const [emailReg,setEmailReg]=useState("");
  const [usernameReg,setUsernameReg]=useState("");
  const [passwordReg,setPasswordReg]=useState("");


  return (
    <div>
     
    <Container>
      <Wrapper>
        <Title>Créér un compte </Title>
        <Form>
          <Input placeholder="prenom" type="text" onChange={(e) => {
              setPrenomReg(e.target.value)
          }} />
          <Input placeholder="nom" type="text" onChange={(e) => {
              setNomReg(e.target.value)
          }} />
          <Input placeholder="username" type="text" onChange={(e) => {
              setUsernameReg(e.target.value)
          }} />
          <Input placeholder="email" type="email" onChange={(e) => {
              setEmailReg(e.target.value)
          }}/>
          <Input placeholder="mot de passe" type="text" onChange={(e) => {
              setPasswordReg(e.target.value)
          }}/>
          <Input placeholder="confirmer le mot de passe" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>inscrire</Button>
          
          
        </Form>
        <p>avez vous déjà un compte?<Link to="/login">connectez vous</Link></p>
      </Wrapper>
    </Container>
    
    </div>
  );
};

export default Register;