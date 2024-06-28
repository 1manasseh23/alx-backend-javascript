/*
function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

export default getResponseFromAPI;
*/
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
