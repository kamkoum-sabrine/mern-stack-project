export default function apiClients(){
   
    return ({
        addClients : 'http://localhost:8080/api/addClients',
        getOneClient : 'http://localhost:8080/api/getOneClient/',
        updateClient : "http://localhost:8080/api/updateClients/",
        deleteClient : 'http://localhost:8080/api/deleteClients/',
        getClient : 'http://localhost:8080/api/getClients'
    })    

}