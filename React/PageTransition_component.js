import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        setTransitionStage('fadeIn');
        return () => setTransitionStage('fadeOut');
    }, [])
    return (
        <div className={`page-transitioni ${transitionStage}`}>
            {children}
        </div>
    )
};

export default PageTransition;

//NOTES: