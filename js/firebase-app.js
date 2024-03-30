// firebaseFunctions.js

// Your web app's Firebase configuration
var firebaseConfig = {
  };
  var app = firebase.initializeApp(firebaseConfig);

  var auth = firebase.auth();

  function signup() {
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(userCredential) {
        // Signed up 
        var user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(error);
      });
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const loginForm = document.getElementById('LoginForm');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  });