
module.exports = date;

function date() {
  var date = new Date()
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  var formattedDate =  dayNames[date.getDay()] + ", " + monthNames[date.getMonth()] + " " + date.getDate()
  return formattedDate;
}
