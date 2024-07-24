import { uploadPhoto, createUser } from "./utils"; 
export default function handleProfileSignup(){
    Promise.all([uploadPhoto(), createUser()])
    .then((response) => {return console.log(`${response[0].body} ${response[1].firstName} ${response[1].lastName}`)})
    .catch("Signup system offline")
}