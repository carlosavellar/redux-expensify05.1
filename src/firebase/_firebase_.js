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

// database.ref("location").once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch(() => {
//     console.log("Erro no fetch");
//   });


// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log("data: ", snapshot.val());
// }, (e) => {
//   console.log("value error: ", e);
// });
// setTimeout(() => {
//   database.ref("location/city").set("Tampa");
// }, 2000);
// setTimeout(() => {
//   database.ref("location/city").set("Michigan");
// }, 5000);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// })
// setTimeout(() => {
//   database.ref("location/city").set("Berlin");
// }, 7000);


// database.ref().set({
//   name: "José Carlos",
//   age: 1000,
//   sttressLevel: 6,
//   location: {
//     city: "Philadelfia",
//     country: "Italy"
//   },
//   job: {
//     title: "C.T.O.",
//     company: "Google"
//   }

// }).then(() => {
//   console.log("Everything went ok");
// }).catch((err) => {
//   console("erro:", err)
// });


// database.ref().on("value", (snapshot) => {
//   const person = snapshot.val();
//   console.log(`${person.name} is ${person.job.title} na ${person.job.company}`);
// });



// database.ref("attribute").set({
//   hight: 280,
//   weight: 90
// });

// database.ref("isSingle").set(true);

// const civilStatus = database.ref("isSingle");

// civilStatus.remove(() => {
//   console.log("Aeee on complete");
// })
//   .then(() => {
//     console.log("Remove complete")
//   }).catch((err) => {
//     console.log("Could noty Remove: ", err);
//   });

// database.ref().update({
//   sttressLevel: 9,
//   "location/city": "New Yourk",
//   "job/company": "Amazon"
// });


// database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
// });

// database.ref("expenses").push({
//   description: "Conta de água",
//   note: "vence este mês",
//   amount: 300,
//   createdAt: 1020200
// });
// database.ref("expenses").push({
//   description: "Casa",
//   note: "pagar",
//   amount: 300,
//   createdAt: 1020200
// });
// database.ref("expenses").push({
//   description: "Mulher",
//   note: "pagar",
//   amount: 300,
//   createdAt: 1020200
// });



// database.ref().once("value")
//   .then((snapshot) => {
//     console.log(snapshot.val());
//     const expense = [];
//     snapshot.forEach((childSnapshot) => {
//       expense.push({
//         ...id.childSnapshot.key,
//         ...snapshot.val()
//       });
//     });

//   });


// database.ref("expenses").on("value", (snapshot) => {
//   console.log(snapshot.val());
//   const expense = [];
//   snapshot.forEach((childSnapshot) => {
//     expense.push({
//       ...id.childSnapshot.key,
//       ...snapshot.val()
//     });
//   });
// });


database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val(), "removed");
});

database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val(), "changed");
});

database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val(), "_added");
});