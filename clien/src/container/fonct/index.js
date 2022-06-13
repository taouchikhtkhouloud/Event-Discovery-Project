import React,  { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

import './index.scss';

export default class Fonct extends Component {
    render() {
        return (
            <div className="explore__container">
                <h1>
                Pourquoi ai-je besoin de Event discovery ?
                </h1>

            <div className="explore__container--inner">
             {this.props.data.map((item,index) =>{return(
                    <div key={index} className="explore__container--inner-card">
                        <img src={item.url} alt="item"/>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                      
                    </div>
                )})}

                </div>
                <NavLink to="/login">

                <Button className='joint'>Rejoindre nous</Button>
                </NavLink>
               
            </div>
        )
    }
}