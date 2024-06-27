import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let res = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { photo, user };
  } catch (err) {
    res = { photo: null, user: null };
  }
  return res;
}
/*
export default function getFullResponseFromAPI(success) {
  return success ? Promise.resolve({ status: 200, body: 'Success' }) : Promise.reject(Error('The fake API is not working currently'));
}

function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' }); // Resolve with success data
    } else {
      reject(new Error('The fake API is not working currently')); // Reject with error message
    }
  });
}

export default getFullResponseFromAPI;
*/
