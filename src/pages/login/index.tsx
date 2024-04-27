import React from "react";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { login } from "../../api/user";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../store/features/tokenSlice";
import { useNavigate } from "react-router-dom";

type FieldType = {
  userName?: string;
  merchantCode?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const nevigate = useNavigate()
  // const {value} = useSelector((store:any)=>store.token);
//   const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    console.log(values);
    const res = await login();
    console.log(res);
    
    const token = ''
    return
    

    dispatch(setToken({value:token}));
    localStorage.setItem('token',token)
    // console.log(res);

    // react routerv6 如何跳转页面
    nevigate('/project')

  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ userName: 'kj', merchantCode:'oubao' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="userName"
        name="userName"
        rules={[{ required: true, message: "Please input your userName!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="merchantCode"
        name="merchantCode"
        rules={[{ required: true, message: "Please input your merchantCode!" }]}
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
    </Card>
  )
};

export default Login;
