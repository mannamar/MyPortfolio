import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import console from '../assets/images/console.svg';
import unity from '../assets/images/unity.svg';
import postman from '../assets/images/postman.svg';
import devops from '../assets/images/devops.svg';
import './Skills.css';

export default function Tools() {
    return (


            <Col xs={16} md={6}>
                <div className="skillsBox toolsBox">
                    <div className="innerSkillsBox">
                        <h2 className="skillsH1 pt-5">Dev Tools</h2>
                        <Row>
                            <Col xs={6}>
                                <div className="d-flex align-items-center mt-4">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                                    <span className="text">Azure</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src={devops} />
                                    <span className="text">DevOps</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                                    <span className="text">VS Code</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" />
                                    <span className="text">Visual Studio</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://code.benco.io/icon-collection/azure-docs/azure-data-studio.svg" />
                                    <span className="text">Data Studio</span>
                                </div>
                            </Col>
                            <Col xs={6}>
                                <div className="d-flex align-items-center mt-4">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
                                    <span className="text">Figma</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src={unity} />
                                    <span className="text">Unity</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                    <span className="text">Git</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src={postman} />
                                    <span className="text">Postman</span>
                                </div>
                                <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src={console} />
                                    <span className="text">SSH/SFTP</span>
                                </div>
                                {/* <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" />
                                    <span className="text">Jira</span>
                                </div> */}
                                {/* <div className="d-flex align-items-center mt-3">
                                    <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                    <span className="text">Node.js</span>
                                </div> */}
                            </Col>
                        </Row>
                    </div>
                </div>
            </Col>
    )
}
