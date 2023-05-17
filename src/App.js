import React, { useState } from 'react';
import './App.scss'

const ProfileImage = (props) => {
    return (
        <div className="card__avatar">
            <img
                className="card__img"
                src={props.src}
                alt="sorry!!" />
            <div className="card__border"></div>
            <div className="card__border"></div>
        </div>
    );
}
const Name = (props) => {
    return (
        <div className="card__bio">
            <h3 className="card__name">{props.name}</h3>
            <p className="card__desc">{props.desc}</p>
        </div>
    );
}
const Actions = (props) => {
    return (
        <div className="card__btn-holder">
            <button className="card__btn" type="button">Follow</button>
            <button className="card__btn" type="button">Message</button>
        </div>
    );
}

const Profile = (props) => {
    return (
        <div className="card__profile">
            <ProfileImage src={props.src}/>
            <Name name={props.name} desc={props.desc}/>
            <Actions />
        </div>
    );
}

const State = (props) => {
    return (
        <div className="card__state" >
            <div className="card__state__item">
                <p className="card__state__number">{props.posts}</p>
                <p className="card__state__text">Posts</p>
            </div>
            <div className="card__state__item">
                <p className="card__state__number">{props.likes}</p>
                <p className="card__state__text">Likes</p>
            </div>
            <div className="card__state__item">
                <p className="card__state__number">{props.followers}</p>
                <p className="card__state__text">Followers</p>
            </div>
        </div>
    );
}

const Card = () => {
    const [profile, setProfile] = useState({
        src: "https://www.fakepersongenerator.com/Face/male/male1085906788635.jpg",
        name: "Robert K Heath",
        desc: "Teacher and Instructor",
        posts: 523,
        likes: 1387,
        followers: 146
    });

    return (
        <section className="card">
            <Profile
                name={profile.name}
                desc={profile.desc}
                src={profile.src}/>
            <State
                posts={profile.posts}
                likes={profile.likes}
                followers={profile.followers}/>
        </section>
    );
}

export default Card;