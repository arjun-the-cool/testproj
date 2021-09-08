var firebaseConfig = {
    apiKey: "AIzaSyBm1oU07dko_TBsjuWi8bjqQh52_APl6YI",
    authDomain: "test-proj-b6001.firebaseapp.com",
    databaseURL: "https://test-proj-b6001-default-rtdb.firebaseio.com",
    projectId: "test-proj-b6001",
    storageBucket: "test-proj-b6001.appspot.com",
    messagingSenderId: "590884688762",
    appId: "1:590884688762:web:c95f703d4b1160552e3cc3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: "adding user"
      });
  }