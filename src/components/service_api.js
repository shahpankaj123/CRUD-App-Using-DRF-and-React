import axios from "axios";

export function getdata(){
    return axios.get('http://127.0.0.1:8000/api/').then(
        res => {
           return res.data
        }
    )
}

export function getdata_student(id){
    console.log(id.id);
    return axios.get(`http://127.0.0.1:8000/api/`+id.id).then(     
        res => {
           return res.data
        }
    )
}

export function adddata_student(student){

    return axios.post(`http://127.0.0.1:8000/api/`,
    {
        id: null,
        name: student.name.value,
        roll: student.roll.value,
        address: student.address.value,

    }).then(
        res =>{
            return res.data
        }
    )
}
export function deldata_student(id){
    console.log(id.id);
    return axios.delete(`http://127.0.0.1:8000/api/`+id.id).then(     
        res => {
           return res.data
        }
    )
}

export function modifydata_student(student){
    

    return axios.put(`http://127.0.0.1:8000/api/`+student.id_value.value+'/',
    {
        name: student.name.value,
        roll: student.roll.value,
        address: student.address.value,

    }).then(
        res =>{
            return res.data
        }
    )
}