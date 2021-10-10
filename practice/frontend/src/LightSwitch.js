import { useState } from 'react';

const LightSwitch = () => {
    const [ currentColor, setCurrentColor] = useState('grey');
    const [ currentSize, setCurrentSize] = useState(20);

    const style = {
        backgroundColor: currentColor,
        fontSize: currentSize

    };

    return <div style={style}> 
        Lightswitch 
        <button onClick={() => setCurrentColor('orange')}>On</button>
        <button onClick={() => setCurrentColor('grey')}>Off</button>
        <button onClick={() => setCurrentSize(currentSize-1)}>Smaller</button>
        <button onClick={() => setCurrentSize(currentSize+1)}>Bigger</button>

    </div>;
}

export default LightSwitch;

