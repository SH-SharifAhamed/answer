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
