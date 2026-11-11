import React from 'react'
import { Button, Typography } from 'antd'

const { Title, Paragraph } = Typography

const Contact = () => {
    return (
        <main className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Title level={1}>Contact Page</Title>
                        <Paragraph>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati perferendis, amet doloremque necessitatibus maiores incidunt illo ipsum rem nulla fuga rerum aut, iste, ut dignissimos ea nam modi ducimus autem.
                        </Paragraph>
                        <Button type='primary'>Click me</Button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact