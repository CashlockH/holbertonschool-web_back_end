export default function uploadPhoto(filename) {
    return Promise.reject(() => {throw Error(`${filename} cannot be processed`)})
}