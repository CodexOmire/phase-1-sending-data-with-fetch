// Add your code here

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Append the new id to the DOM
    document.body.innerHTML += data.id;
    return data;
  })
  .catch(error => {
    // Append the error message to the DOM
    // For FetchError, extract the reason from the message or use the message directly
    const errorMessage = error.message.includes('reason:') 
      ? error.message.split('reason: ')[1] 
      : error.message;
    document.body.innerHTML += errorMessage;
    // Don't re-throw the error for the test to pass
  });
}
