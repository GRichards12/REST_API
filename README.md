////REST API

//Description

This is the foundation of a REST API, it is functional when performing CRUD operations, and it provides JSON web token authentication.

//Usage

- POST a request to the /user endpoint with a JSON body containing keys of username, email and password to create a user.
- POST a request to the /login endpoint with a JSON body containing keys of username and password to log in, the password must be correct.
- POST a request to the /changepass endpoint with a JSON body containing keys of the username and a new password. NOTE: you must be signed in to perform this action.
- Send a DELETE request to the /user/<username> endpoint, where username is the user to be deleted.
- Send a GET request to the /user/<username> endpoint to find the email associated with a given username.
- Send a GET request to the /users endpoint to see a list of the users' information (I'll be making this admin only soon)
- Send a GET request to the /token endpoint to login with token authentication

 
