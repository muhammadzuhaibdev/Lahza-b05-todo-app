import React, { useState } from 'react'
import { Button, Col, Form, Input, message, Row, Typography } from 'antd'
import './addtodo.css'

const { Title } = Typography

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

const AddTodo = () => {
    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        setState((s) => ({ ...s, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        let { firstName, lastName, email, password, confirmPassword } = state

        firstName = firstName.trim()
        lastName = lastName.trim()
        email = email.trim()
        password = password.trim()
        confirmPassword = confirmPassword.trim()

        if (firstName.length < 3) { return message.error("Enter First name correctly.") }
        if (lastName.length < 3) { return message.error("Enter last name correctly.") }
        if (!emailRegex.test(email)) { return message.error("Enter a valid email.") }
        if (password.length < 6) { return message.error("Enter password at least 6 chars.") }
        if (password !== confirmPassword) { return message.error("Password Doesn't match.") }

        const userData = { firstName, lastName, email, password, confirmPassword }

        console.log(userData)

        setState(initialState)
    }

    return (
        <main className='addTodoMain p-3 p-md-4 p-lg-5'>
            <div className="card p-3 p-md-4">
                <Title level={1} style={{ textAlign: 'center', marginBottom: '20px' }}>Register</Title>

                <Form layout='vertical'>
                    <Row gutter={16}>
                        <Col span={24} md={12}>
                            <Form.Item label="First Name" required>
                                <Input size='large' type="text" placeholder='Enter your first name' name='firstName' value={state.firstName} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24} md={12}>
                            <Form.Item label="Last Name" required>
                                <Input size='large' type="text" placeholder='Enter your last name' name='lastName' value={state.lastName} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Email" required>
                                <Input size='large' type="email" placeholder='Enter your email' name='email' value={state.email} onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Password" required>
                                <Input.Password size='large' type="password" placeholder='Enter your password' value={state.password} name='password' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Confirm Password" required>
                                <Input.Password size='large' type="password" placeholder='Enter confirm password' value={state.confirmPassword} name='confirmPassword' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Button type='primary' size='large' block onClick={handleSubmit}>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main>
    )
}

export default AddTodo