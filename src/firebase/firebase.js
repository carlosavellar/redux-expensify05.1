import * as firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBq7uhdChCglk1GAZjO8amiaZBXQMhMtWM",
  authDomain: "expenseapp-f69db.firebaseapp.com",
  databaseURL: "https://expenseapp-f69db.firebaseio.com",
  projectId: "expenseapp-f69db",
  storageBucket: "expenseapp-f69db.appspot.com",
  messagingSenderId: "80958326505",
  appId: "1:80958326505:web:b39c8211b49677da"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
  name: "José Carlos",
  age: 1000,
  sttressLevel: 6,
  location: {
    city: "Philadelfia",
    country: "Italy"
  },
  job: {
    title: "C.T.O.",
    company: "Google"
  }

}).then(() => {
  console.log("Everything went ok");
}).catch((err) => {
  console("erro:", err)
});

database.ref("attribute").set({
  hight: 280,
  weight: 90
});

database.ref("isSingle").set(true);

const civilStatus = database.ref("isSingle");

civilStatus.remove(() => {
  alert("Aeee on complete");
})
  .then(() => {
    console.log("Remove complete")
  }).catch((err) => {
    console.log("Could noty Remove: ", err);
  });

database.ref().update({
  sttressLevel: 9,
  "location/city": "New Yourk",
  "job/company": "Amazon"

});