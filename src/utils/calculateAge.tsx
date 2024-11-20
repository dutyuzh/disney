 // Function to calculate age from birthdate
 export const calculateAge = (birthDate: string) => {
    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDateObj.getMonth();
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };
