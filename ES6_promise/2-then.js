<<<<<<< HEAD
export default function handleResponseFromAPI(promise) {
    return promise.then(() => ({
      status: 200,
      body: 'success',
    })).catch(() => Error()).finally(() => console.warn('Got a response from the API'));
  }
=======
function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({
        status: 200,
        body: 'success',
      }))
      .catch(() => Error())
      .finally(() => console.warn('Got a response from the API'));
  }
  
  export default handleResponseFromAPI;
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
