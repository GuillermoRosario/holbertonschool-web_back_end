<<<<<<< HEAD
export default function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }
=======
function uploadPhoto(filename) {
    return Promise.reject(new Error(`${filename} cannot be processed`));
  }
  
  export default uploadPhoto;
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
