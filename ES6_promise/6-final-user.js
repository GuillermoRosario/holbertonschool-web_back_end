import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

<<<<<<< HEAD
export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]).then((res) =>
  {
    for (const i of res) {
      if (i.status === 'rejected') {
        i.value = `Error: ${i.reason.message}`;
        delete i.reason;
      }
    }
    return res;
  });
}
=======
async function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = {
    status: 'pending ',
  };
  const promise2 = {
    status: 'pending ',
  };

  try {
    const signup = await signUpUser(firstName, lastName);
    promise1.status = 'fulfilled';
    promise1.value = signup;
  } catch (err) {
    promise1.status = 'rejected';
    promise1.value = err.toString();
  }

  try {
    const upload = await uploadPhoto(fileName);
    promise2.status = 'fulfilled';
    promise2.value = upload;
  } catch (err) {
    promise2.status = 'rejected';
    promise2.value = err.toString();
  }

  return [promise1, promise2];
}

export default handleProfileSignup;localStorage
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
