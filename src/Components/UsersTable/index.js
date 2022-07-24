 import React from "react";

    function CustomHeading( props ){
        console.log( props )
        return(
            <>
                <button type="button" onClick={toggle}>{isShown ? "ocultar"
                : "Mostrar"}</button>
                <input
                onChange={filterHadler}
                />
                {
                    siShown &&
                    <table dark>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <body>
                            {
                                usersList.map((user, index) => {
                                    const {nombre, email} = user
                                    return(
                                        <tr key={index}>
                                            <td>{nombre}</td>
                                            <td>{email} </td>
                                        </tr>
                                    )
                                })
                            }
                        </body>
                    </table>
                }
            </>
        )
    }

    export default CustomHeading

    