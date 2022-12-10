export async function get_orders_api (pageNo="", success, fail) {
    const token = await localStorage.getItem("salesToken");
    if (token === null) {
      console.log("No credentials found, user needs to log in....");
      return [];
    } 
    else { await fetch(
          `http://localhost:8000/api/orders/?page_no=${pageNo}`,
          {
              method: 'GET',
              headers: {
                  'Content-Type': 'Application/JSON',
                  'Authorization': `Bearer ${token}`,
              }
          }
      ).then(data => {console.log(data)})
      .then(data => {
        if (data.status === 401) {
            console.log("Token not valid");
            window.location = "/login";
            return [];
          }
          if (data.status === 200) {
            console.log("success")
            return data
          } else {
            console.log("failed");
            return []
            }})}}