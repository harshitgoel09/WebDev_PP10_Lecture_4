


let cap = {
    firstName: "Steve",
    lastName: "Rogers",
    age: 35,
    movies: ["first avenger","civil war","winter soldier"],
    address: {
        state: "New York",
        city: "manhatten"
    },
    isAvenger: true
};



// How to get
// RULE  // . jab use karte ha jab key ka name specified ho and [] jab specied na ho
// Type 1
console.log("Last Name", cap.lastName);
console.log("fav movie", cap.movies[2]);
console.log("city", cap.address.city);
console.log("last name ", cap["lastName"]);  //Bracket ke andar specify karke daal saktey hai

// Type 2
    //It will show error.
    // console.log("Some Prop", cap[abc]); //It will show error.

    // It is the right way.
    let abc = "age";
    console.log("Some Prop", cap[abc]);
// Square bracket ke anadr jo bhi cheej aati ha vo ek variable ki traha
// Treat kari jaati ha

// How to update
cap.friends = ["tony","peter","bruce"];
cap[abc] = 67; // ess line se age 67 ho jayegi

console.log(cap);

// How to delete
delete cap.movies;
delete cap[abc];
console.log(cap);