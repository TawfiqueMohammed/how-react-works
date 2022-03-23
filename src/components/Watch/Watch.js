import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepCount = steps + 1;
        setSteps(newStepCount);

    }

    useEffect(() => {
    }, [steps])

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>This is My Smart Watch</h2>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour......</button>
            <Display name="Garmin" steps={steps}></Display>
        </div>
    );
};

export default Watch;