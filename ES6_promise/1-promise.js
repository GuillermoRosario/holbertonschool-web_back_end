<<<<<<< HEAD
export default function getResponseFromAPI(success) {
    return new Promise((res, rej) => {
      if (success) {
        res({
=======
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
          status: 200,
          body: 'Success',
        });
      } else {
<<<<<<< HEAD
        rej(new Error('The fake API is not working currently'));
=======
        reject(new Error('The fake API is not working currently'));
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
      }
    });
  }