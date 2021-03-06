import { Card, Input, Row, Col, Button, message } from "antd";
import Nav from './nav'
import { useState } from "react";
import {Signup} from "../api"
import { useRouter } from 'next/router'
import Footer from './../components/footer';

const SignUp = () => {
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handlSubmit = () => {
    setIsLoading(true);
    Signup({ email, password ,name,phone }, (err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.data);
        // localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace('/login');
        setIsLoading(false);
      }
    });
  };
   
return (
  <div>
<Nav/>
  <div className="login-page">
    <Card style={{ width: 400 }}>
      <Row gutter={[20, 20]}>
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
        <Col span={24}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </Col>
        <Col span={24}>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="phone"
          />
        </Col>
        <Col span={24}>
          <Button
            loading={isLoading}
            onClick={handlSubmit}
            // type="primary"
            className=" loginButton"
            block
          >
            SIGN UP
          </Button>
        </Col>
        
      </Row>
      <a href="./login" className=" loginA"> already have an account? </a>

    </Card>
  </div>
  <Footer/>
  </div>
);
};

export default SignUp;