function timeConversion(s) {
  // Convert a string like 10:05:23 PM to 24h format, returns like [22,5,23]
  var s = time_str.match(/(\d+):(\d+):(\d+) (\w)/);
  var hours = Number(s[1]);
  var minutes = Number(s[2]);
  var seconds = Number(s[3]);
  var meridian = s[4].toLowerCase();

  if (meridian == "p" && hours < 12) {
    hours += 12;
  } else if (meridian == "a" && hours == 12) {
    hours -= 12;
  }
  return [hours, minutes, seconds];
}
