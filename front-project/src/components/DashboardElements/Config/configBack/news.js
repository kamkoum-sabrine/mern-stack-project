export default function apiNews(){
   
    return ({
        addNews : 'http://localhost:8080/api/addNews',
        getOneNews : 'http://localhost:8080/api/getOneNews/',
        updateNews : "http://localhost:8080/api/updateNews/",
        deleteNews : 'http://localhost:8080/api/deleteNews/',
        getNews : 'http://localhost:8080/api/getNews'
    })    

}