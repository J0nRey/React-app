import React, { useState } from 'react'

import Products from './Pages/Products'


const App = () => {

    const [ isLogged, setIsLogged ] = useState(true)

        return(

            <>
            <button onClick={ () => setIsLogged( !isLogged ) } >{ !isLogged ? "loggin" : "singout" }</button>
           <Products isLogged={isLogged} />
           </>
        )
    }


export default App
