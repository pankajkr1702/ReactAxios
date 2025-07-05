import axios from "axios"


export const commonAPI = async(method,url,data) => 
{
    let reqConfig = {
        method,
        url,
        data
    }

    return await axios(reqConfig)
    .then((result) => {
      // Success: return the result
      return result;
    })
    .catch((err) => {
      if (err.response) {
        // Error : Return status code for further handling
        return err.response;
      } else if (err.request) {
        // Request was made, but no response was received (network error, etc.)
        alert("No response received from the server.");
        return "Network Error";
      } else {
        // Other errors (like setting up the request)
        alert(`Error: ${err.message}`);
        return "Error";
      }
    });
}