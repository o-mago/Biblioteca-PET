 // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCqwCGfA5E7023qrqGJoAe-w7DuR1yEPiE",
    authDomain: "biblioteca-pet.firebaseapp.com",
    databaseURL: "https://biblioteca-pet.firebaseio.com",
    storageBucket: "biblioteca-pet.appspot.com",
    messagingSenderId: "187273821972"
  };
  firebase.initializeApp(config);
  
  function signIn(){
	  const txtEmail = document.getElementById('txtEmail');
	  const txtSenha = document.getElementById('txtSenha');
	  const email = txtEmail.value;
	  const senha = txtSenha.value;
	  const auth = firebase.auth();
	  
	  const promise = auth.signInWithEmailAndPassword(email, senha);
	  window.location.replace("Principal.html");
	  //promise.catch(e => console.log(e.message));
  }
  
  function signUp(){
	  const txtEmail = document.getElementById('txtEmail');
	  const txtSenha = document.getElementById('txtSenha');
	  const email = txtEmail.value;
	  const senha = txtSenha.value;
	  const auth = firebase.auth();
	  
	  const promise = auth.createUserWithEmailAndPassword(email, senha);
	  //promise.catch(e => console.log(e.message));
  }
  function signOut(){
	  firebase.auth().signOut().then(function() {
	  window.location.replace("BibliotecaPET.html");
	}, function(error) {
	  // An error happened.
});
	  //promise.catch(e => console.log(e.message));
  }
  
  firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser) {
		console.log(firebaseUser);
	} else {
		console.log('nao esta logado');
	}
  })