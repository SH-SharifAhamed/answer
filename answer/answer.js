// Problem-1
function describeValue(value) {
     const type = typeof value;
     const truthyFalsy = value ? "truthy" : "falsy";

     return `${type} | ${truthyFalsy}`;
}
// console.log(describeValue(null));
