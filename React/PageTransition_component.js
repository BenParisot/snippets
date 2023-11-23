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

//NOTES: -this needs tweaking, it doesn't quite work because the return setTransitionStage hits after the component has already unmounted