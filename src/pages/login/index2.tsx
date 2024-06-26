import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login2 } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/features/tokenSlice";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate()
  // const {value} = useSelector((store:any)=>store.token);
//   const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    const res = await login2(values);
    const token = res.data; 
    dispatch(setToken({value:token}));
    localStorage.setItem('token',token)
    // console.log(res);

    // react routerv6 如何跳转页面
    nevigate('/project')

  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ username: 'davion', password:'davion' }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: "Please input your username!" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      name="remember"
      valuePropName="checked"
      wrapperCol={{ offset: 8, span: 16 }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
};

export default Login;
