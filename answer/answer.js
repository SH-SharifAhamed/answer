// Problem-1
function describeValue(value) {
     const type = typeof value;
     const truthyFalsy = value ? "truthy" : "falsy";

     return `${type} | ${truthyFalsy}`;
}
// console.log(describeValue(null));

// Problem-2
function getDayType(day) {
     day = day.toLowerCase();
     switch (day) {
          case 'friday':
          case 'saturday':
               return "Weekend";
          case 'sunday':
          case 'monday':
          case 'tuesday':
          case 'wednesday':
          case 'thursday':
               return "Working Day";
          default:
               return "Invalid Day";
     }
}
// console.log(getDayType("friday"));


// Problem-3
function validateUsername(username) {
     const u = String(username);
     if (u.length < 4) return "Too Short";
     if (u.includes(' ')) return "No Space Allowed";
     if (u.toLowerCase().includes('admin')) return "Reserved Word";
     return "Available";
}
// console.log(validateUsername("sharif"));


// Problem-4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
     let fare = 50;
     if (distance > 2) {
          fare += (distance - 2) * 15;
     }
     fare += waitingMinutes * 2;
     if (isNight) {
          fare = fare * 1.2;
     }
     return fare;
}
console.log(getCngFare(2));