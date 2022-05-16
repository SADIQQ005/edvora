import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [rides, setRides] = useState([])
    const [owner, setOwner] = useState({})

    useEffect(() => {
        axios.get('https://assessment.api.vweb.app/user').then(res => {
            setOwner(res.data)
            console.log(owner)
        }).catch(err => console.log(err))
    }, [])
        

    useEffect(() => {
        axios.get('https://assessment.api.vweb.app/rides').then(res => {
            setRides(res.data)
        }).catch(err => console.log(err))
    }, [])

    const values = {owner, rides}
    
    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}