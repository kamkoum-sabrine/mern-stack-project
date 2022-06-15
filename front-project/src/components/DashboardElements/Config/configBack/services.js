export default function apiServices(){
   
    return ({
        addServices : 'http://localhost:8080/api/addServices',
        getOneService : 'http://localhost:8080/api/getOneService/',
        updateService : "http://localhost:8080/api/updateServices/",
        deleteService : 'http://localhost:8080/api/deleteServices/',
        getServices : 'http://localhost:8080/api/getServices'
    })    

}