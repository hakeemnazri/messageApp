function timing(dateString) {
    // Parse the string into a Date object
    const dateObj = new Date(dateString);
  
    // Format the time in 12-hour system (e.g., "11:48 PM")
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const formattedTime = `${(hours % 12) || 12}:${minutes
      .toString()
      .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;
  
    // Format the date (e.g., "Jan 24 2025")
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);
  
    // Combine time and date into a single string
    const formattedDateTime = `${formattedTime}, ${formattedDate}`;
  
    return formattedDateTime;
  }

  export default timing