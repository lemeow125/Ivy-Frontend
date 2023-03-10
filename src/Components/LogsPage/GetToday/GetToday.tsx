export default function GetToday() {
  const current = new Date();
  const date =
    ("0" + (current.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + current.getDate()).slice(-2) +
    "-" +
    current.getFullYear();
  console.log("Today is " + date);
  return date;
}
