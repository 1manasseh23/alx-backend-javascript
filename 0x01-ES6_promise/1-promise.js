<<<<<<< HEAD
export default function getFullResponseFromAPI(success) {
  return success ? Promise.resolve({ status: 200, body: 'Success' }) : Promise.reject(Error('The fake API is not working currently'));
}
/*
=======
>>>>>>> 6785e4fbca10ce4969174da5e7c1721a2a1fcc28
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
<<<<<<< HEAD
*/
=======
>>>>>>> 6785e4fbca10ce4969174da5e7c1721a2a1fcc28
