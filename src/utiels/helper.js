export const apiurl="https://safetydevapis.safetytracker.be/public/api/";

export const getToken=()=>{
    if(typeof window !== 'undefined'){
        return localStorage.getItem("testToken")
    }
}