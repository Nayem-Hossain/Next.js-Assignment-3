// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".

async function getData() {
    try {
        const response = await axios.get(`https://api.example.com/data`);
        console.log(response);

    } catch (error) {
        console.log(error)
    }
}
getData();