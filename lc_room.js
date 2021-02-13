// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBKdy4mBi10Sgr81OCDN0XBapZfjRHrG4",
    authDomain: "let-s-chat-64db4.firebaseapp.com",
    projectId: "let-s-chat-64db4",
    storageBucket: "let-s-chat-64db4.appspot.com",
    messagingSenderId: "441261755587",
    appId: "1:441261755587:web:7e3ffdbec394eb40cbe676",
    measurementId: "G-SF8WTHSEZT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  function logout(){

    user_name = document.getElementById("user_name").value;

    window.location = "index.html"

    localStorage.removeItem("User Name");

}
