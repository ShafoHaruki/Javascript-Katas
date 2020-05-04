function displayValue(value) {
  let minutes = value % 60;
  let hours = Math.floor(value / 60) % 24;
  let days = Math.floor(value / 1440) % 7;
  let weeks = Math.floor(value / 10080) % 4;
  let months = Math.floor(value / 40320) % 28;

  let arr = [];
  if (months > 0) arr.push(months + " month" + (months == 1 ? "" : "s"));
  if (weeks > 0) arr.push(weeks + " week" + (weeks == 1 ? "" : "s"));
  if (days > 0) arr.push(days + " day" + (days == 1 ? "" : "s"));
  if (hours > 0) arr.push(hours + " hour" + (hours == 1 ? "" : "s"));
  if (minutes > 0) arr.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
  return arr.join(" ");
}
