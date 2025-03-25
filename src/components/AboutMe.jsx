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
                const myStory = `Main name is ${data.name}. I am is a ${data.gender} with ${data.hair_color} hair and ${data.eye_color} eyes that always attract attention. 
                My skin is ${data.skin_color}, giving me a mysterious and unique appearance. Weighing ${data.mass} kg and at an age corresponding to his birth year (${data.birth_year}).`;
                setAboutMe(myStory)
            })
            .catch((e) => setAboutMe(e.message))
    }, []);

    return (
        <div>
            {hero}
        </div>
    );
};

export default AboutMe;