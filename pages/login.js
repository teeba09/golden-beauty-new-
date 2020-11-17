import { Card, Input, Row, Col, Button, message } from "antd";
import Nav from './nav'
import { useState } from "react";
import Footer from '../components/footer'
import {LOgin} from "../api"
import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handlSubmit = () => {
    setIsLoading(true);
    LOgin({ email, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace('/');
        setIsLoading(false);
      }
    });
  };
   
return (
  <div>
    <Nav/>
  <div className="login-page">

    <Card className="loginL" style={{ width: 400 }}>
      <Row   gutter={[20, 20]}>
        <Col span={24}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </Col>
        <Col span={24}>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Col>
        <Col   span={24}>
          <Button
            loading={isLoading}
            onClick={handlSubmit}
            block
            className=" loginButton"
          >
            Login
          </Button>
        </Col>
        
        
      </Row>
      <a href="./signUp" className=" loginA"> create new account? </a>
    </Card>
  </div>
  <Footer/>
  </div>
);
};

export default Login;