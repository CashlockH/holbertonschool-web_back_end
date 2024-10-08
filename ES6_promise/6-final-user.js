import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, filename){
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then(
        (response) => [{
            status: response[0].status,
            value: response[0].value},
        {
            status: response[1].status,
            value: response[1].reason.toString()
        }])
}