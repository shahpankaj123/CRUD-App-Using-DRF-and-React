import axios from "axios";

export function getdata(){
    return axios.get('http://127.0.0.1:8000/api/').then(
        res => {
           return res.data
        }
    )
}