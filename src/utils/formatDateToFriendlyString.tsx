export const formatDateToFriendlyString = (dateString: string): string => {
    // Convert the input date string to a valid Date object
    const date = new Date(dateString.replace(/,/g, '')); // Remove commas for consistent parsing
    
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return ""; // If invalid date, return a fallback message
    }
  
    // Array of month names
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Helper function to get the correct suffix for the day
    const getDaySuffix = (day: number) => {
      if (day > 3 && day < 21) return 'th'; // Special case for 11th-20th
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };
  
    // Get the month, day with suffix, and year
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const dayWithSuffix = `${day}${getDaySuffix(day)}`;
    const year = date.getFullYear();
  
    // Return the formatted date string
    return `${month} ${dayWithSuffix}, ${year}`;
  };
  