import React, {useEffect} from 'react';
import {base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [hero, setAboutMe] = React.useState('One moment, please ...');
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch peoples');
                }
                return res.json()
            })
            .then(data => {
                setAboutMe({...data});
            })
            .catch((e) => setAboutMe({error: e.message}))
    }, []);

    if (hero.error) 
        return (
            <div>
                {hero}
            </div>
        );
    const myStory = `Main name is ${hero.name}. I am is a ${hero.gender} with ${hero.hair_color} hair and ${hero.eye_color} eyes that always attract attention. 
                My skin is ${hero.skin_color}, giving me a mysterious and unique appearance. Weighing ${hero.mass} kg and at an age corresponding to his birth year (${hero.birth_year}).`;
    return (
        <p className={'farGalaxy'}>
            {myStory}
        </p>
    );
};

export default AboutMe;