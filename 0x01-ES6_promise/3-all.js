import { uploadPhoto, createUser } from './utils'; // Assuming utils.js exports both functions
// import createUser from './utils'; Assuming utils.js exports both functions

async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);

    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    console.error('Signup system offline');
  }
}

export default handleProfileSignup;
