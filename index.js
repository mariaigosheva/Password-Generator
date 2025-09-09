// Full character set for password generation
const characters = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
  "0","1","2","3","4","5","6","7","8","9",
  "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
  "{","[","}","]",",","|",":",";","<",">",".","?","/"
];

const passwordLength = 15;

// Generate one password
function generatePassword() {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

// Generate two different passwords
function generatePasswords() {
  let password1 = generatePassword();
  let password2 = generatePassword();

  // Ensure they are not the same
  while (password2 === password1) {
    password2 = generatePassword();
  }

  document.getElementById("password1").value = password1;
  document.getElementById("password2").value = password2;
}

// Copy password
function copyPassword(passwordId) {
  const passwordField = document.getElementById(passwordId);
  passwordField.select();
  passwordField.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard! ✅");
}





