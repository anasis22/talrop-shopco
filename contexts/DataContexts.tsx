"use client"

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react"

interface DataContextType {
    topSignupClose : boolean,
    setTopSignupClose : React.Dispatch<React.SetStateAction<boolean>>,
    closeTopSignup : () => void,
    menuOpen: boolean;
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    data: any;
}

const DataContext = React.createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context =  useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context
}

interface DataProviderProps {
    children : React.ReactNode,
}

export const DataProvider: React.FC<DataProviderProps> = ({children}) => {

    const [topSignupClose,setTopSignupClose] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [data, setData] = useState<any>([]);


    // fetch the data from json file
    useEffect(() => {
        axios
          .get("/data.json")
          .then((response) => {
            // console.log("Data fetched successfully:", response.data);
            setData(response.data);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);


    // close top sign up bar
    const closeTopSignup = () => {
        setTopSignupClose(!topSignupClose)
    }

    const value: DataContextType = {
        topSignupClose,
        setTopSignupClose,
        closeTopSignup,
        menuOpen,
        setMenuOpen,
        data,
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

