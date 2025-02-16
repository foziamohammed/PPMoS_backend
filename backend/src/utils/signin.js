const axios = require('axios');

async function signIn(role, username, password) {
  try {
    const response = await axios.post('http://localhost:9000/api/auth/signin', {
      role,
      username,
      password
    });

    if (response.status === 200) {
      console.log('Login successful!', response.data);
      return response.data.token;
    } else {
      console.log('Login failed:', response.data.message);
      return null;
    }
  } catch (error) {
    console.error('Error during sign-in:', error.message);
    return null;
  }
}

module.exports = signIn;
