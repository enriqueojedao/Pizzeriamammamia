import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("https://pizzeriamammamia.onrender.com/api/pizzas") 
            .then((res) => res.json())
            .then((data) => setPizzas(data));
    }, []);

    return (
        <PizzaContext.Provider value={{ pizzas }}>
            {children}
        </PizzaContext.Provider>
    );
};

export default PizzaProvider;