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
    const [adding, setadding] = useState(false);
    const [loading, setLoading] = useState(false);
    // Removed unused error state

    const getForms = async (estado = true) => {
        setLoading(true)
        const user = await supabase.auth.getUser();
    
          console.log(user.data.user);
     const {data, error} = await supabase.from("pagos").select()
     .eq("estado", estado)
        .order("id", { ascending: true });

       setForms(data);
        if (error) throw error;
       // return data;
       setLoading(false)
    
      
    }
    const fechtClientes = async () =>{
      try {
        const {data, error} = await supabase.from('pagos')
        .select(`
          *,
         clientes(
        * )
          `)
          if (data) {
            console.log(data)
          }
          if (error) throw error;
      } catch (error) {
        console.log(error)        
      }
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
        finally {
            setadding(false);
        }

    }
    const getFormsFalse = async (estado = false) => {
        setLoading(true)
        const user = await supabase.auth.getUser();
    
        console.log(user.data.user);
   const {data, error} = await supabase.from("pagos").select()
   .eq("estado", estado)
      .order("id", { ascending: true });

     setForms(data);
      if (error) throw error;
     // return data;
     setLoading(false)
    }
    const StateForm = async (id, updateState) =>{
        console.log(id, updateState)
        try {
            const { data, error } = await supabase
              .from('pagos')
              .update(updateState)
              .eq('id', id)
              .select();
      
            if (error) {
              throw error
            }
      
            // Actualiza el estado local 'items' para reflejar el cambio inmediatamente
            setForms(prevItems =>
              prevItems.map(item => (item.id === id ? { ...item, ...data[0] } : item))
            );
      
            setForms(data[0]);
          } catch (err) {
           console.log(err)
          }
    }
    const deleteForm = async (id) =>{
        const user = await supabase.auth.getUser();
    
        console.log(user.data.user.id);
      const {error, data} = await supabase.from("pagos").delete()
       .eq("uuid", user.data.user.id)
       .eq("id", id)

       if(error) throw error
        setForms(

            forms.filter(form => form.id !== id)
        )
       console.log(data)
    }
    const updateForm = async (id, updates) =>{
        try {
            const { data, error } = await supabase
              .from('pagos')
              .update(updates)
              .eq('id', id)
              .select();
      
            if (error) {
              throw error
            }
      
            // Actualiza el estado local 'items' para reflejar el cambio inmediatamente
            setForms(prevItems =>
              prevItems.map(item => (item.id === id ? { ...item, ...data[0] } : item))
            );
      
            return data[0];
          } catch (err) {
           console.log(err)
          }
       
    }

    return (<FormContext.Provider value={{forms, getForms, createForm, getFormsFalse, deleteForm,updateForm,
    fechtClientes, StateForm, adding, loading}}>
        {children}
        </FormContext.Provider>
    )
}

