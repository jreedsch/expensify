import * as firebase from 'firebase';

// variables are from webpack
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export {firebase, database as default };


/*
firebase.database().ref('expenses').push({description: 'Rent', amount: 100, createdAt: 1564725600000}).then(() => {
  console.log("IN APP.JS, firebase push complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase push error: "+error);
}); //Fri Aug 02 2019 00:00:00 GMT-0600
firebase.database().ref('expenses').push({description: 'Coffee', amount: 300, createdAt: 1565050000000}); //Mon Aug 05 2019 18:06:40 GMT-0600
firebase.database().ref('expenses').push({description: 'Milk', amount: 50, createdAt: 1566050000000});  //Sat Aug 17 2019 07:53:20 GMT-0600
*/

/*
firebase.database().ref('expenses').once('value')
.then((snapshot) => {
  console.log("IN APP.JS, firebase fetch once complete, snapshot.val(): "+JSON.stringify(snapshot.val()));
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    })
  });
  console.log("IN APP.JS, firebase fetch once complete, expenses array: "+expenses);
  expenses.forEach((expense) => {
    console.log("expense: "+JSON.stringify(expense));
  });
}).catch((error) => {
  console.log("IN APP.JS, firebase fetch once error: "+error);
});

const onValueChange = firebase.database().ref('expenses').on('value',
  (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      })
    });
    expenses.forEach((expense) => {
      console.log("expense: "+JSON.stringify(expense));
    });
  },
  (error) => {
    console.log("IN APP.JS, firebase on value subscribe error: "+error);
  }
);

firebase.database().ref('expenses').push({description: 'Phone', amount: 7000, createdAt: 1564727000000}).then(() => {
  console.log("IN APP.JS, firebase push complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase push error: "+error);
}); //Fri Aug 02 2019 00:00:00 GMT-0600


const onChildRemoved = firebase.database().ref('expenses').on('child_removed',
  (snapshot) => {
      console.log("removed expense: "+JSON.stringify(snapshot));
  },
  (error) => {
    console.log("IN APP.JS, firebase subscribe on child_removed error: "+error);
  }
);

const onChildChanged = firebase.database().ref('expenses').on('child_changed',
  (snapshot) => {
      console.log("changed expense: "+JSON.stringify(snapshot));
  },
  (error) => {
    console.log("IN APP.JS, firebase subscribe on child_changed error: "+error);
  }
);

const onChildAdded = firebase.database().ref('expenses').on('child_added',
  (snapshot) => {
      console.log("added expense: "+JSON.stringify(snapshot));
  },
  (error) => {
    console.log("IN APP.JS, firebase subscribe on child_added error: "+error);
  }
);

*/

//firebase.database().ref().off('value', onValueChange);
//firebase.database().ref().off('child_removed', onChildRemoved);
//firebase.database().ref().off('child_changed', onChildChanged);
//firebase.database().ref().off('child_added', onChildAdded);

/*

// insert
console.log("IN APP.JS, TEST THE FIREBASE SETUP A");
firebase.database().ref().set({
  name: 'J. Reed Schrichte',
  age: 64,
  sex: 'M',
  location: {
    city: 'Keenesburg',
    state: 'Colorado',
    address: '34548'
  },
  status: 'single'
}).then(() => {
  console.log("IN APP.JS, firebase write complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase write error: "+error);
});
console.log("IN APP.JS, TEST THE FIREBASE SETUP B");

// remove
//firebase.database().ref('sex').set(null); \/\/identical
firebase.database().ref('sex').remove()
.then(() => {
  console.log("IN APP.JS, firebase remove complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase remove error: "+error);
});

// update
// with set and remove and child attribute
firebase.database().ref().update({
  age: 65,
  name: 'J. Reed Schrichte',
  job: 'software engineer', //new attribute
  status: null,  //remove attribute
  'location/address': '34548 County Road 6'
})
.then(() => {
  console.log("IN APP.JS, firebase update complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase update error: "+error);
});

// single fetch
firebase.database().ref().once('value')
.then((snapshot) => {
  console.log("IN APP.JS, firebase fetch once complete, snapshot.val(): "+JSON.stringify(snapshot.val()));
}).catch((error) => {
  console.log("IN APP.JS, firebase fetch once error: "+error);
});

// subscribe
//const onValueChange = (snapshot) => {
//  console.log("IN APP.JS, firebase subscribe, snapshot.val(): "+JSON.stringify(snapshot.val()));
//};
//firebase.database().ref().on('value', onValueChange);
// \/\/ identical

const onValueChange = firebase.database().ref().on('value',
  (snapshot) => {
    console.log("IN APP.JS, firebase subscribe, snapshot.val(): "+JSON.stringify(snapshot.val()));
  },
  (error) => {
    console.log("IN APP.JS, firebase subscribe error: "+error);
  }
);

firebase.database().ref().update({
  age: 65,
  name: 'John Reed Schrichte'
}).then(() => {
  console.log("IN APP.JS, firebase 2 update complete.");
}).catch((error) => {
  console.log("IN APP.JS, firebase 2 update error: "+error);
});

// unsubscribe
setTimeout(() => {
  firebase.database().ref().off('value', onValueChange);
}, 5000);

console.log("IN APP.JS, TEST THE FIREBASE SETUP B");
*/



/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('PROMISE RESOLVED');
  }, 3000);
});

console.log("IN APP.JS, TEST THE FIREBASE SETUP A");
promise.then((data) => {
  console.log("IN APP.JS, promise data: "+data);
}, (error) => {
                console.log("IN APP.JS, promise error: "+error);
              }
);
*/
// /\/\ identical effect
//}).catch((error) => {
//  console.log("IN APP.JS, promise error: "+error);
//});
