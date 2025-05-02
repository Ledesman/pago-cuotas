import React,{useState, useEffect } from 'react'
import '../../App.css';

function NotificacionesCli() {
const [day , setDay]= useState(null);

useEffect(() => {
    const today = new Date();
    setDay(today.getDate());
}, []);

let message = '';
let noticeClass = '';
let subMessage = null;

if(day >= 1 && day <= 4) {
  noticeClass = 'notice-1';
  message = 'Estimado cliente, recuerde revisar sus pagos y fechas importantes del período actual.';
} else if(day >= 11 && day <= 20) {
  noticeClass = 'notice-2';
  message = 'Importante: Verifique sus próximas fechas de vencimiento y evite recargos.';
} else if(day >= 21 && day <= 30) {
  noticeClass = 'notice-3';
  message = 'Atención: Se aproxima la subida de cuotas en este período.';
  subMessage = <div className="suba-cuotas">Por favor, asegure sus pagos para evitar inconvenientes.</div>;
} else {
  message = 'Día fuera de rango estándar. Por favor contacte con soporte.';
}
  return (
    <div className={`notification ${noticeClass}`}>
          {message}
          {subMessage}
        </div>
  )
}

export default NotificacionesCli
