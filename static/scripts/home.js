function validateForm() {
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length) {
    alert('fields must not be blank');
  }

  if (isNaN(parseInt(age)) || typeof parseInt(age) !== 'number') {
    alert('Age must be a number')
    return false;
  }

  validRegEx = /^[a-zA-Z]*$/
  if (name.match(validRegEx) == null) {
    alert('name must be a string')
    return false;
  }

  if (species.match(validRegEx) == null) {
    alert('species must be a string')
    return false;
  }

  return true;
}
