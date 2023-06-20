/* 
a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".

b. Send a JSON payload with the following data: { "name": "John Doe", "email": "johndoe@example.com" }.

*/
async function postData() {
    try {
        const jsonPayload = {
            "name": "John Doe",
            "email": "johndoe@example.com"
        }

        const response = await axios.post(`https://api.example.com/submit`, jsonPayload);
        console.log(response);

    } catch (error) {
        console.log(error)
    }
}
postData();