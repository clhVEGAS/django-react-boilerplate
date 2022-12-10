export const login_api = async (username, password, success, fail) => {
    const response = await fetch(
          `http://localhost:8000/api/token/`,
          {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                "username": username,
                "password": password,
              })
          }
      ).catch(err => {
        console.log(err)
      })}