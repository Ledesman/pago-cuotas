
import React from 'react'

//{ formsPage, setFormsPage, currentPage, setCurrentPage }

function Paginacion({ formsPage, totalForms, currentPage, setCurrentPage }) {

const pageNumbers = [];

//console.log(Math.ceil(totalForms / formsPage))
for (let i = 1; i <= Math.ceil(totalForms / formsPage); i++) {
   pageNumbers.push(i);
   }
   const onPrevPage = () => {
    setCurrentPage( currentPage - 1);
   }
    const onNextPage = () => {
      setCurrentPage( currentPage + 1);
    }

    const onSpecificPage = (n) => {
      setCurrentPage(n);
    }

  return (
    <div>
      <nav aria-label="Page navigation example"
      role='navigation'
      aria-level='pagination'>
     
     {/* {`page-link ${ currentPage >= pageNumbers.length === 1 ? 'is-disabled' : ''}` } */}
        <ul className="pagination justify-content-center">
          <li className="page-item" >
          <button className={`page-link ${ currentPage === 1 ? 'disabled' : ''}` } onClick={onPrevPage} tabIndex="-1" aria-disabled="true">Anterior</button>
           </li>
          
          
            {
          pageNumbers.map(number => (
              <li  className="page-item" key={number}>
                  <button 
                  className={`page-link ${
                    number === currentPage ? 'active' : ''
                    }`} onClick={()=> onSpecificPage(number)}>{number}</button>
                </li>
              ))
            }
         
          <li className="page-item">
          <button className={`page-link ${ currentPage >= pageNumbers.length ? 'disabled' : ''}` } onClick={onNextPage}>Siguiente</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Paginacion
