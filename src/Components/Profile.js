import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';

const Profile = () => {
    const [name, setName] = useState('James Smith');
    const [bio, setBio] = useState('Lorem ipsum is simply dummy text of the printing and typesetting industry.');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
    };

    return (
        <Container>
            <Row className="my-4">
                <Col xs={12} md={6} style={{width: 300, height: 300}}>
                    {/* Placeholder for profile picture */}
                    <div className="profile-picture-placeholder">
                        <img src="/1651919570901.jpeg" alt="Profile" className="img-thumbnail" />
                        {/* If you don't have a picture, you can use a placeholder */}
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleNameChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Biography</Form.Label>
                            <Form.Control as="textarea" rows={3} value={bio} onChange={handleBioChange} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
