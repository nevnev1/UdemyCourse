import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnadrbSamc-ASXnYH685fMs2rL1g7I9I4",
    authDomain: "expensify-73130.firebaseapp.com",
    databaseURL: "https://expensify-73130.firebaseio.com",
    projectId: "expensify-73130",
    storageBucket: "expensify-73130.appspot.com",
    messagingSenderId: "985175852989"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Nevin',
    age: 22,
    isSingle: true,
    location: {
        city: 'Lelystad',
        country: 'Netherlands'
    }
});

// database.ref().set('this is my data');

database.ref('age').set(27);
database.ref('location/city').set('Test');
database.ref('attributes').set({
    heigth: 198,
    weigth: 60
});
