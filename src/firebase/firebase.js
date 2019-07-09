
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmBj9o0eOomH3-DPxmY8CfVU6__RTs8zE",
    authDomain: "expensifytests.firebaseapp.com",
    databaseURL: "https://expensifytests.firebaseio.com",
    projectId: "expensifytests",
    storageBucket: "expensifytests.appspot.com",
    messagingSenderId: "660020779859",
    appId: "1:660020779859:web:b84d43f1a79a5d41"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
//     employee: {
//         name: "José Carlos",
//         age: 40,
//         job: {
//             title: "Developer",
//             company: "Google"
//         },
//         skills: {
//             language: "JavaScript",
//             database: "Firebase"
//         }
//     },
// });

// database.ref("employee").once("value").then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val.age);
// }).catch((err) => {
//     console.log(err);
// });

// database.ref("employee").on("value", snapshot => {
//     console.log(snapshot.val().age);
//     console.log(snapshot.val().name);
// })


// database.ref("expenses").push({
//     description: "Conta de água",
//     note: "vence este mês",
//     amount: 300,
//     createdAt: 1020200
// });
// database.ref("expenses").push({
//     description: "Casa",
//     note: "pagar",
//     amount: 300,
//     createdAt: 1020200
// });
// database.ref("expenses").push({
//     description: "Mulher",
//     note: "pagar",
//     amount: 300,
//     createdAt: 1020200
// });


// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });


// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });


// database.ref("expenses").on("child_removed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

