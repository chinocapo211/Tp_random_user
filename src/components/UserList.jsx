import React, { useEffect, useState } from 'react';
import Card from './Cards';

const UserList = () => {
    const urlApi = "https://randomuser.me/api/?results=5";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(urlApi)
        .then(response => response.json())
        .then(data => setUsers(data.results))
        .catch(error => console.log('Hubo un error ' + error))
    }, []);

    return(
        <>
            <h1>Usuarios</h1>
            <div class="centro">
                {users.map((users, index) => (
                    <Card key={index} user={users}/>
                ))}
            </div>
        </>
    );
}
export default UserList;