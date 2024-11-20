// Utility to convert date string (11/19/2024, 6:37:23 PM) to "May 20th, 2024"
export const formatDateToFriendlyString = (dateString: string): string => {
    // Parse the input date string
    const date = new Date(dateString);
  
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
  
  // Example usage
  const formattedDate = formatDateToFriendlyString("11/19/2024, 6:37:23 PM");

  