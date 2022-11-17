const mary = { name: "Mary Sue" };
mary["name"] = "Mary Jane";
mary["age"]  = 22;

 console.log(mary)

 const person = {
    name: "Paul",
    address: {
      street: "310 W 95th",
      city: "New York",
      zipCode: 10027
    }
  };

  console.log(person.address.city)
  console.log(typeof(person.address))
  console.log(Object.keys(person))

const spam = "spam";
person["dislikes"] = { food: spam, email: "spam" };
console.log(person)