import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Calculator = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(0);
    const [serverResult, setServerResult] = useState(0);

    const handleNumberChange = (setter) => (e) => {
        setter(e.target.value);
    };

    const handleAddition = (e) => {
        e.preventDefault();
        const sum = parseFloat(number1) + parseFloat(number2);
        setResult(sum);

        // Here you would make an API call to the backend to perform the addition
        // For now, this is just a placeholder function
        fetch('http://34.204.18.112:3001/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ number1, number2 }),
        })
        .then((response) => response.json())
        .then((data) => setServerResult(data.sum))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <Container>
            <Row className="my-4">
                <Col xs={12}>
                    <Form onSubmit={handleAddition}>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label style={{width:'20%'}}>Enter First Number:</Form.Label>
                            <Form.Control type="number" value={number1} onChange={handleNumberChange(setNumber1)} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex">
                            <Form.Label style={{width:'20%'}}>Enter Second Number:</Form.Label>
                            <Form.Control type="number" value={number2} onChange={handleNumberChange(setNumber2)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <p>Your Addition Result (from server) is: {serverResult}</p>
                    <p>Your Addition Result (from ReactJS) is: {result}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Calculator;
