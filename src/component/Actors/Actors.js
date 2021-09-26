import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Actors.css';


const Actors = (props) => {
    // console.log(props.actor);
    const cartIcon = <FontAwesomeIcon icon={faUserPlus} />
    const fbIcon = <FontAwesomeIcon icon={faFacebookSquare} />
    const twIcon = <FontAwesomeIcon icon={faTwitterSquare} />
    const insIcon = <FontAwesomeIcon icon={faInstagramSquare} />
    const { name, age, img, nationaliy, profession, roleName, role, salary, dateOfBirth, fbLink, twLink, instLink
    } = props.actor;

    return (
        <div className="col ">
            <div className="text-center shadow actor-card card h-100">
                <div className="mt-2">
                    <img src={img} className="" alt="" />
                </div>
                <div className="d-flex flex-column card-body">
                    <h4 className="card-title">{name}</h4>
                    <p>{role} | Born {dateOfBirth}</p>
                    <div className="actorInfo mb-2">
                        <p className="card-text"><span className="infoTitle">Age</span> : {age}</p>
                        <p className="card-text"><span className="infoTitle">Role Name</span> : {roleName}</p>
                        <p className="card-text"><span className="infoTitle">Profession</span> : {profession}</p>
                        <p className="card-text"><span className="infoTitle">Nationality</span> : {nationaliy}</p>
                        <p className="card-text"><span className="infoTitle">Casting Cost</span> : ${salary}</p>
                    </div>
                    <div className="mt-auto ">
                        <button onClick={() => props.handleAddedActors(props.actor)} className="btn w-75 btn-secondary">{cartIcon} select actor</button>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-around social-link">
                        <a target="_blank " href={fbLink}>{fbIcon}</a>
                        <a target="_blank " href={twLink}>{twIcon}</a>
                        <a target="_blank " href={instLink}>{insIcon}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actors;