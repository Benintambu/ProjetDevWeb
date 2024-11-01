// PlatesContext.js
import React, { createContext, useState, useContext } from 'react';

const PlatesContext = createContext();

const PlatesProvider = ({ children }) => {
    const [plates, setPlates] = useState([]);

    const addPlate = (plate) => {
        setPlates((prevPlates) => [...prevPlates, plate]);
    };

    const getPlates = () => plates;

    return (
        <PlatesContext.Provider value={{ addPlate, getPlates }}>
            {children}
        </PlatesContext.Provider>
    );
};

const usePlates = () => {
    const context = useContext(PlatesContext);
    if (!context) {
        throw new Error('usePlates must be used within a PlatesProvider');
    }
    return context;
};

// Vérifiez que l'exportation se fait correctement
export { PlatesProvider, usePlates };
