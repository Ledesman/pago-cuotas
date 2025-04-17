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

    const getForms = async (estado = true) => {
        const user = await supabase.auth.getUser();
    
          console.log(user.data.user);
     const {data, error} = await supabase.from("pagos").select()
     .eq("estado", estado)
        .order("id", { ascending: true });

       setForms(data);
        if (error) throw error;
       // return data;

      
    }
    const createForm = async (formData) =>{
        try {
            const user = supabase.auth.getUser();
            console.log(user);
            const {data, error} = await supabase.from("pagos").insert({
                nombre: formData.nombre,
                apellido: formData.apellido,
                montoPagar: formData.montoPagar,
                fechaPago: formData.fechaPago,
                numerCotas: formData.numerCotas,
                mes: formData.mes,
                cuota_act: formData.cuota_act,
                created_at: new Date(),
                observacion: formData.observacion,
                estado: true,
                uuid: user.id
            });
            if (error) throw error;
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    const getFormsFalse = async (estado = false) => {
        const user = await supabase.auth.getUser();
    
        console.log(user.data.user);
   const {data, error} = await supabase.from("pagos").select()
   .eq("estado", estado)
      .order("id", { ascending: true });

     setForms(data);
      if (error) throw error;
     // return data;
    }

    return (<FormContext.Provider value={{forms, getForms, createForm, getFormsFalse}}>
        {children}
        </FormContext.Provider>
    )
}

