function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' })) // Resolve with success object
    .catch(() => ({})) // Reject with empty object
    .finally(() => console.log('Got a response from the API')); // Log on any resolution
}

export default handleResponseFromAPI;
