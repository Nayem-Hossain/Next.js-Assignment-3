/* a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date.
      The function should use the Date object.
*/

function getDayOfWeek(dateFormate) {
    let myDate = new Date(dateFormate);
    // console.log(myDate);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[myDate.getDay()];
    // console.log(dayOfWeek);

    return dayOfWeek;
}


/* b. Implement the function to display the day of the week for the current date. */

function getCurrentDate() {
    let currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedCurrentDate = `${year}-${month}-${day}`;

    return formattedCurrentDate;
}


console.log(getDayOfWeek(getCurrentDate()));