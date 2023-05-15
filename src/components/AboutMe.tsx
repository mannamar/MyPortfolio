import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AboutMe.css';
import { TypeAnimation } from 'react-type-animation';
import { LinkedinLogo } from '@phosphor-icons/react';

export default function AboutMe() {
    return (
        <Col xs={8}>
            <div className="aboutBox">
                <div className="glassBox">
                    <div className="innerAboutBox">
                        <h1 className="pt-5">Hi, My name is Amar</h1>
                        <h1>I'm a{' '}
                            <TypeAnimation className="typedText"
                                sequence={[
                                    'Web Developer',
                                    2000,
                                    'UI/UX Designer',
                                    1500,
                                    'Problem Solver',
                                    1500,
                                    'Codestack Graduate',
                                    1500,
                                ]}
                                repeat={Infinity}
                            />
                        </h1>
                        <div className='btnRow d-flex'>
                            <a href="https://www.linkedin.com/in/mannamar/" rel="noreferrer" target="_blank">
                                <button className="conBtn">Contact Me</button>
                            </a>
                            <a href="https://www.linkedin.com/in/mannamar/" rel="noreferrer" target="_blank">
                                <button className="socBtn">
                                    <LinkedinLogo size={28} weight="fill" className="socLogo"/>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}