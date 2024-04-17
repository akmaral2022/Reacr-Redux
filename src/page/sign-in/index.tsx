import { Button, Checkbox, Form, Input } from "antd"
import React from "react"
import { Link } from "react-router-dom";

const SignIn: React.FC = () => {

  type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
  };

  const onFinish = () => {
    alert('Финиш')
  }

  const onFinishFailed = () => {
    alert('Ошибка')
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{
        display: 'flex', alignItems: 'centre', justifyContent: 'center',
        background: '#ffffff', padding: '20px', borderRadius: '20px'
      }}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'centre', justifyContent: 'center' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
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
            <Link to='/catalog'>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SignIn
