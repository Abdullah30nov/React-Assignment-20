import React from 'react';
import { useDispatch } from 'react-redux';
import { addcounter, resetcounter, subcounter } from '../store/slices/counterSlices';

const Button = () => {
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(addcounter());
    };

    const handleSub = () => {
        dispatch(subcounter());
    };
    const handleReset = () => {
        dispatch(resetcounter());
    };

    return (
        <div style={styles.buttonContainer}>
            <button onClick={handleAdd} style={styles.buttonAdd}>Add</button>
            <button onClick={handleSub} style={styles.buttonSub}>Sub</button>
            <button onClick={handleReset} style={styles.Resetbtn}>Reset</button>
        </div>
    );
};

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px',
    },
    buttonAdd: {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#4caf50', // Green color for Add
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, background-color 0.2s',
    },
    buttonSub: {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#f44336', // Red color for Sub
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, background-color 0.2s',
    },
    Resetbtn: {
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: 'yellowgreen', // Red color for Sub
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s, background-color 0.2s',
    },
    buttonHover: {
        transform: 'scale(1.05)',
    },
};

// Adding hover effect dynamically
const handleHover = (e, isHover) => {
    if (isHover) {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.backgroundColor = e.target.style.backgroundColor === 'rgb(76, 175, 80)' ? '#388e3c' : '#d32f2f';
    } else {
        e.target.style.transform = 'scale(1)';
        e.target.style.backgroundColor = e.target.style.backgroundColor === 'rgb(56, 142, 60)' ? '#4caf50' : '#f44336';
    }
};

document.querySelectorAll('button').forEach(btn => {
    btn.onmouseenter = (e) => handleHover(e, true);
    btn.onmouseleave = (e) => handleHover(e, false);
});

export default Button;
