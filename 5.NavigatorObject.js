/* a. Write a JavaScript function that detects the user's browser name and version using the navigator object. */

function detectUserBrowser(){
    let browserCodeName=navigator.appCodeName;
    let browserName=navigator.appName;
    let browserVersion=navigator.appVersion;

    console.log("Browser Code Name: ",browserCodeName);
    console.log("Browser Name: ",browserName);
    console.log("Browser Version: ",browserVersion);
}

/* b. Implement the function to display the user's browser name and version.*/
detectUserBrowser();