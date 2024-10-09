function checkForName(fullName, firstName) {
  if (fullName.includes(firstName)) {
    return true;
  }
  return false;
}
console.log(checkForName("Caty Stars", "Caty"));
