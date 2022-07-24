/*  Componente que no tienen estado
    Componente Tonto,
    Componente Representacional.
    Componente Funcional,
    Componente statles.

    Componente que tienen estado
    Componente statefull.

    */

    import React from "react";

    function CustomHeading( props ){
        console.log( props )
        return(
            <h1 className={ props.customClasses.join(" ")}>{props.text}</h1>
        )
    }

    export default CustomHeading