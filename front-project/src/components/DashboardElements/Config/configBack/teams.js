export default function apiTeams(){
   
    return ({
        addTeams : 'http://localhost:8080/api/addTeam',
        getOneTeam : 'http://localhost:8080/api/getOneTeam/',
        updateTeam : "http://localhost:8080/api/updateTeam/",
        deleteTeam : 'http://localhost:8080/api/deleteTeam/',
        getTeams : 'http://localhost:8080/api/getTeam'
    })    

}