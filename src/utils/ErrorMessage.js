import React from 'react'

const ErrorMessage =  ({errores, clearError}) => {  
    
    return (                    
        <div className="errorMessage">
             <i className="fa fa-times red float-right" aria-hidden="true" onClick={clearError}></i>
             <span>All fields are required.</span>
        </div>  
   );
}

export default ErrorMessage;
