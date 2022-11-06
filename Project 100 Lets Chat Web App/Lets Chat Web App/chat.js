
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCxGHAy5w12m_0PfHdypnKGdiDdupwHQbU",
    authDomain: "kwitter-d6b6c.firebaseapp.com",
    databaseURL: "https://kwitter-d6b6c-default-rtdb.firebaseio.com",
    projectId: "kwitter-d6b6c",
    storageBucket: "kwitter-d6b6c.appspot.com",
    messagingSenderId: "529003978973",
    appId: "1:529003978973:web:64ebe57a6422fde70afb34",
    measurementId: "G-Q6VK81VXCE"
  };
  
  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



