import axios from 'axios';
export const Signin=(email,password)=>{
    return axios.post("http://localhost:3000/auth/login",{email,password})
        .then(response=>{
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}
export const signOut=()=> {
    localStorage.removeItem("user");
}