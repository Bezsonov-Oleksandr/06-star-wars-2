import {base_url} from "../utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [hero, setHero] = useState();
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                const info = {
                    name: data.name,
                    gender: data.gender,
                    birth_year: data.birth_year,
                    height: data.height,
                    mass: data.mass,
                    hair_color: data.hair_color,
                    skin_color: data.skin_color,
                    eye_color: data.eye_color
                }
                setHero(info);
            })
    }, [])

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    <p><span className='display-3'>name:</span> {hero.name}</p>
                    <p><span className='display-3'>gender:</span> {hero.gender}</p>
                    <p><span className='display-3'>birth year:</span> {hero.birth_year}</p>
                    <p><span className='display-3'>height:</span> {hero.height}</p>
                    <p><span className='display-3'>mass:</span> {hero.mass}</p>
                    <p><span className='display-3'>hair color:</span> {hero.hair_color}</p>
                    <p><span className='display-3'>skin color:</span> {hero.skin_color}</p>
                    <p><span className='display-3'>eye color:</span> {hero.eye_color}</p>
                </div>
            }
        </>
    );
};

export default AboutMe;

// import React, {useEffect} from 'react';
// import {base_url} from "../utils/constants.js";
//
// const AboutMe = () => {
//     const [hero, setAboutMe] = React.useState('One moment, please ...');
//     useEffect(() => {
//         fetch(`${base_url}/v1/peoples/1`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Failed to fetch peoples');
//                 }
//                 return res.json()
//             })
//             .then(data => {
//                 setAboutMe({...data});
//             })
//             .catch((e) => setAboutMe({error: e.message}))
//     }, []);
//
//     if (hero.error)
//         return (
//             <div>
//                 {hero}
//             </div>
//         );
//     const myStory = `Main name is ${hero.name}. I am is a ${hero.gender} with ${hero.hair_color} hair and ${hero.eye_color} eyes that always attract attention.
//                 My skin is ${hero.skin_color}, giving me a mysterious and unique appearance. Weighing ${hero.mass} kg and at an age corresponding to his birth year (${hero.birth_year}).`;
//     return (
//         <p className={'farGalaxy'}>
//             {myStory}
//         </p>
//     );
// };
//
// export default AboutMe;