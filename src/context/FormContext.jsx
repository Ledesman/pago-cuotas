import { createContext, useContext, useState  } from "react";
import { supabase } from "../supabase/client";


export const FormContext = createContext();

export const useForms = () =>{
    const context = useContext(FormContext)
    if (!context)
    throw new Error("useForms must be used within a FormContextProvider")
    // if (!context) {
    return context;
}

export const FormContextProvider = ({children}) => {

    const [forms, setForms] = useState([]);

    const getForms = async () => {
        const user = await supabase.auth.getUser();
    
          console.log(user.data.user);
     const {data, error} = await supabase.from("pagos").select()
        .order("id", { ascending: true });

       setForms(data);
        if (error) throw error;
       // return data;

      
    }
    // const getFormsById = async () => {
    //     const user = supabase.auth.getUser();
    //     console.log(user);
    //     const { data, error } = await supabase
    // .from("pagos")
    // .select()
    // .eq("id", user.id)
    // .onder("id", { ascending: true });
    //     if (error) throw error;
    //     return data;
    // }

    return (<FormContext.Provider value={{forms, getForms}}>
        {children}
        </FormContext.Provider>
    )
}

