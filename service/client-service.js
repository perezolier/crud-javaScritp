// este archivo se encarga de recibir la comunicación y recibir la respuesta y despues la genera en un JSON
const listaCliente = () => fetch("http://localhost:3000/perfil").then(respuesta => respuesta.json());


const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
    method: "POST", 
    headers: {
        "Content-type": "application/json"
     },
     body: JSON.stringify({nombre, email, id: uuid.v4()})
    });
};


const eliminarCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
};

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then(respuesta => respuesta.json());
};

const actualizarCliente = (nombre, email, id) => {
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({nombre, email, id}),
    }).then(respuesta => respuesta).catch(err => console.log(err));
};

export const clientServices = {
    listaCliente,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};

//CRUD -- metodos HTTP
// Create -- POST
// Read -- GET
//Update -- PUT/PATCH 
//Delete -- DELETE
//fetch ya tiene el metodo por defecto 

