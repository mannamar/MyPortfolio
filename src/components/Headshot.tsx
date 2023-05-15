import React from 'react';
import { Col } from 'react-bootstrap';
import picture from '../assets/images/headshot.png';
import './Headshot.css';

export default function Headbox() {
    return (
        <Col sxs={16} md={4}>
            <div className="headBox">
                <img className="headPic" src={picture} alt="Handsome gentleman"/>
            </div>
        </Col>
    )
}