import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Skills.css';
import mssql from '../assets/images/mssql.svg';
// import 'devicon';

export default function Skills() {
    return (


            <Col xs={16} md={6}>
                <div id="skills" className="skillsBox">
                    <div className="innerSkillsBox">
                        <h2 className="skillsH1 pt-5">Tech Stack</h2>
                        <Row>
                            <Col xs={6}>
                                <div className="d-flex align-items-center mt-4">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                    <span className="text">React</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg" />
                                    <span className="text">.NET</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src={mssql} />
                                    <span className="text">SQL Server</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                                    <span className="text">Tailwind</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                                    <span className="text">Bootstrap</span>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                                    <span className="text">C#</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                    <span className="text">Javascript</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                                    <span className="text">Typescript</span>
                                </div>
                                <div className="d-flex align-items-center mt-4">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                    <span className="text">HTML</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                    <span className="text">CSS</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
    )
}
