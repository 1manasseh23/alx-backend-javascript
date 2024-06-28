import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
/*
import { uploadPhoto, createUser } from './utils'; // Assuming utils.js exports both functions
// import createUser from './utils'; Assuming utils.js exports both functions

async function handleProfileSignup() {
  try {
    // const [photoResponse, userResponse] = await 
      return Promise.all([
      uploadPhoto(),
      createUser(),
    ]).then(([uploadPhoto, createUser]) => { console.log(uploadPhoto.body, createUser.firstName, createUser.lastName); })

    // console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;
*/
