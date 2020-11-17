import { Card, Input, Row, Col, Button, message } from "antd";
import { otp} from "../api";

import { useState } from "react";

import { useRouter } from 'next/router'

const Otp = () => {
  const router = useRouter()
  const [otp, setotp] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handlSubmit = () => {
    setIsLoading(true);
    otp( otp, (err, result) => {
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
  <div className="login-page">
    <Card style={{ width: 400 }}>
      <Row gutter={[20, 20]}>
        
        <Col span={24}>
          <Input
            value={otp}
            onChange={(e) => setotp(e.target.value)}
            placeholder="otp"
          />
        </Col>
        <Col span={24}>
          <Button
            loading={isLoading}
            onClick={handelSubmit}
            type="primary"
            block
          >
           check
          </Button>
        </Col>
        
      </Row>
    </Card>
  </div>
);
};

export default Otp;