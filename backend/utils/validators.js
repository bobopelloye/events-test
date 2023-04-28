const moment = require('moment');

const  validateDates = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);

  if (!start.isValid() || !end.isValid()) {
    return false;
  }

  return end.isAfter(start);
}
module.exports = { validateDates };