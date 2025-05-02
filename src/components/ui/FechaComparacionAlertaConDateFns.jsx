import React, { useState, useEffect } from 'react';
import { parseISO, isBefore, format, addDays } from 'date-fns';


async function fetchDataWithCustomFormat() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: '1 al 5', eventDate: '05/05/2025' },
        { id: 2, name: '1 al 10', eventDate: '30/04/2025' },
      ]);
    }, 4000);
  });
}

function FechaComparacionAlertaConDateFns() {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  useEffect(() => {
    async function loadDataAndCheckDates() {
      const fetchedData = await fetchDataWithCustomFormat();
      setData(fetchedData);

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      fetchedData.forEach(item => {
        // Analizar la fecha con el formato específico
        const eventDate = parseISO(item.eventDate); // Si tu backend envía ISO 8601 es ideal
        // Si no es ISO 8601, usa parse con el formato:
        // const eventDate = parse(item.eventDate, 'DD/MM/YYYY', new Date());

        if (isBefore(eventDate, today)) {
          setShowAlert(true);
          setAlertMessage(`El evento "${item.name}" ya pasó (${format(eventDate, 'dd/MM/yyyy')}).`);
        }

        const threeDaysFromNow = addDays(today, 3);
        if (eventDate > today && eventDate <= threeDaysFromNow) {
          setShowAlert(true);
          setAlertMessage(prevMessage =>
            `${prevMessage}${prevMessage ? '\n' : ''}El evento "${item.name}" es pronto (${format(eventDate, 'dd/MM/yyyy')}).`
          );
        }
      });
    }

    loadDataAndCheckDates();
  }, []);

  return (
    <div>
      <h1>Comparación de Fechas con date-fns</h1>
      {showAlert && (
        <div style={{ backgroundColor: 'lightblue', padding: '10px', border: '1px solid blue' }}>
          <strong>Alerta:</strong> {alertMessage}
          <button onClick={() => setShowAlert(false)}>Cerrar</button>
        </div>
      )}
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - Fecha: {item.eventDate} {/* Aquí mostramos la cadena original */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FechaComparacionAlertaConDateFns;