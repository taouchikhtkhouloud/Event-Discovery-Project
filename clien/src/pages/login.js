import styled from "styled-components";
import { Navbar } from "../components";
import { Footer } from "../container";
import {mobile} from "../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
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
  width: 55%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #B0D8DA;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
 
height: 70px;
left: 460px;
top: 544.68px;

transform: rotate(-0.07deg);
`;

const Linki = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <div>

      
    <Container>
      

      <Wrapper>
        
        <Title>Se connecter</Title>
        <Form action="../../login"method="post">
          <Input type="text" name="email" placeholder="email" />
          <Input type="password" name="password" placeholder="mot de passe" />
          <Button type="submit">Se connecter</Button>
          <Linki>VOUS NE VOUS SOUVENEZ PAS DU MOT DE PASSE ?</Linki>
          <Link to="/register"><Linki >CRÉER UN NOUVEAU COMPTE</Linki></Link>
        </Form>
      </Wrapper>
      
    </Container>
      
    </div>
  );
};

export default Login;