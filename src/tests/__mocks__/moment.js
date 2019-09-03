// always return a fixed point in time with a faked-out call to moment
const moment = require.requireActual('moment'); // get the original

export default (timestamp = 0) => {
  return moment(timestamp); // if no timestamp, return fixed point in time
}
