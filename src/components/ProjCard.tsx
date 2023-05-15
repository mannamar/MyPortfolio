import React from 'react';
import './ProjCard.css';
import { Col } from 'react-bootstrap';
import { ArrowCircleUpRight } from '@phosphor-icons/react';
import pokePic from '../assets/images/pokepedia.png';

export default function ProjCard(props: { title: string; text: string; img: string; url: string;}) {
    return (
        <Col xs={12} md={6} lg={4}>
            <a href={props.url} rel="noreferrer" target="_blank">
                <div className="projBox">
                    <h5 className="projTitle">{props.title}</h5>
                    <p className="projText">{props.text}</p>
                    <img src={props.img} alt="Pokepedia Screenshot" className="projImg"></img>
                    <ArrowCircleUpRight className="projArrow" size={50} color="#fff0f0" weight="fill" />
                </div>
            </a>
        </Col>
    )
}
