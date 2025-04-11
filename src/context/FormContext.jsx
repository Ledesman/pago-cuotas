import { createContext, useContext, useState  } from "react";
import { supabase } from "../supabase/client";


export const FormContext = createContext();

export const useForm = () =>{
    const context = useContext(FormContext)
    return context;
}

export const FormContextProvider = ({children}) => {

    const [Forms, setForms] = useState([]);

    const getForms = async () => {
     const result = await supabase.from("pagos").select()

     console.log(result);
    }

    return <FormContext.Provider value={{Forms, setForms, getForms}}>
        {children}
        </FormContext.Provider>

}

