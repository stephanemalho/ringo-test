export const options = {
  method : "POST",
  headers: {
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/json'
  },
  referer: 'http://localhost:3000',
  // backend server is running on port 9000
  origin: 'http://localhost:9000',
  mode: 'cors',  
  required: true,
  
}

export const uptateOptions = {
  method : "PUT",
  headers: {
    'accept': 'application/json, text/plain, */*',
    'content-type': 'application/json'
  },
}

