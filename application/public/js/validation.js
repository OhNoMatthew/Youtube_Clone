console.log('hello test')

var userInputField = document.getElementById('username');
var userInputPass = document.getElementById('password')
var userrule1 = document.getElementById('u1');
var userrule2 = document.getElementById('u2');
var passrule1 = document.getElementById('p1');
var passrule2 = document.getElementById('p2');
var userInputMail = document.getElementById('email');
var confirmPasswordInput = document.getElementById('confirmpass');
var ageCheck = document.getElementById('age');
var tosCheck = document.getElementById('tos');

userInputField.addEventListener('input', function(e) {
  let username = e.target.value;
  let rule1 = usernameLength(username);
  let rule2 = usernameFirst(username);

if(!username) {
  userInputField.classList.remove('invalid-text');
  userInputField.classList.remove('valid-text');
  userrule2.classList.remove('valid-rule');
  userrule2.classList.remove('invalid-rule');
  userrule1.classList.remove('invalid-rule');
  userrule1.classList.remove('valid-rule');
  console.log(false)
  }
  if (rule1 && rule2) {
    userInputField.classList.remove('invalid-text');
    userInputField.classList.add('valid-text');
    console.log('VALID')
    return true;
  } else {
    userInputField.classList.add('invalid-text');
    userInputField.classList.remove('valid-text');
    console.log('INVALID')
    return false
  }
})

userInputPass.addEventListener('input', function(r){
  let password = r.target.value;
  let rule1 = passwordLength(password);
  let rule2 = passwordCharacter(password);

  if(!password) {
    userInputPass.classList.remove('invalid-text');
    userInputPass.classList.remove('valid-text');
    passrule2.classList.remove('valid-rule');
    passrule2.classList.remove('invalid-rule');
    passrule1.classList.remove('invalid-rule');
    passrule1.classList.remove('valid-rule');
    console.log(false)
    }
    if (rule1 && rule2) {
      userInputPass.classList.remove('invalid-text');
      userInputPass.classList.add('valid-text');
      console.log('VALID')
      return true;
    } else {
      userInputPass.classList.add('invalid-text');
      userInputPass.classList.remove('valid-text');
      console.log('INVALID')
      return false
  }
})

userInputMail.addEventListener('input', function(y) {
  let email = y.target.value;
  let eRule = emailRule(email);

  if (!email) {
    userInputMail.classList.remove('invalid-text')
    userInputMail.classList.remove('valid')
    console.log('false mail')
  }
  if (eRule) {
  userInputMail.classList.remove('invalid-text');
  userInputMail.classList.add('valid-text');
  return true;
} else {
  userInputMail.classList.add('invalid-text');
  userInputMail.classList.remove('valid-text');
  return false;
  }
})

function emailRule(email) {
  if (email.length > 3) {
    return true;
  } else {
  return false;
  }
}

function usernameFirst(username) {
  const regex = /^[a-zA-Z]/;
  if (regex.test(username)){
    userrule2.classList.remove('invalid-rule');
    userrule2.classList.add('valid-rule');
    return true;
  } else {
    userrule2.classList.remove('valid-rule');
    userrule2.classList.add('invalid-rule');
    return false;
  }
}

function usernameLength(username) {
  if (username.length > 3){
    userrule1.classList.add('valid-rule');
    userrule1.classList.remove('invalid-rule');
    return true;
  } else {
    userrule1.classList.add('invalid-rule');
    userrule1.classList.remove('valid-rule');
    return false;
  }
}
  
function passwordLength(password) {
  if(password.length > 8) {
    passrule1.classList.add('valid-rule');
    passrule1.classList.remove('invalid-rule');
    return true;
  } else {
    passrule1.classList.add('invalid-rule');
    passrule1.classList.remove('valid-rule');
    return false;
  }
}

function passwordCharacter(password) {
  const regex =  /^(?=.*[A-Z])(?=.*\d)(?=.*[\/\*\-+!@#$%^&~\[\]])/;
  if (regex.test(password)) {
    passrule2.classList.add('valid-rule');
    passrule2.classList.remove('invalid-rule');
    return true;
  } else {
    passrule2.classList.add('invalid-rule');
    passrule2.classList.remove('valid-rule');
    return false; 
  }
}

function validatePasswordsMatch(password, confirmPassword) {
  return password === confirmPassword;
}

confirmPasswordInput.addEventListener('input', function() {
    const password = userInputPass.value;
    const confirmPassword = confirmPasswordInput.value;
    const passwordsMatch = validatePasswordsMatch(password, confirmPassword);

    if (passwordsMatch) {
        confirmPasswordInput.classList.add('valid-text');
        confirmPasswordInput.classList.remove('invalid-text');
    } else {
        confirmPasswordInput.classList.remove('valid-text');
        confirmPasswordInput.classList.add('invalid-text');
    }
});

  var registerButton = document.getElementById('registeration')

registerButton.addEventListener('submit', function(e) {
    e.preventDefault();
  
    let username = userInputField.value;
    let password = userInputPass.value;
    let confirmPassword = confirmPasswordInput.value;
    let email = userInputMail.value;
  
    let validUsername = usernameLength(username) && usernameFirst(username);
    let validPassword = passwordLength(password) && passwordCharacter(password);
    let validConfirmPassword = validatePasswordsMatch(password, confirmPassword);
    let validEmail = emailRule(email);
  
    if (validUsername && validPassword && validConfirmPassword && validEmail) {
      alert("Registration successful!");

    } else {
      alert("Please fill out the form correctly.");
    }
  });
  
  var usernameRules = document.getElementById('username-rules');
  var passwordRules = document.getElementById('password-rules');

  userInputField.addEventListener('focus', function(u){
    usernameRules.style.display = "block";
  });

  userInputField.addEventListener('blur', function(u){
    usernameRules.style.display = "none";
  });

var passwordRules = document.getElementById('password-rules');

  userInputPass.addEventListener('focus', function (p){
   passwordRules.style.display = "block";
  });
  userInputPass.addEventListener('blur', function(p){
    passwordRules.style.display = "none";
  });