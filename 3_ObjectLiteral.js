console.log("Object Literals");

function AddressMaker(city, country) {
  const newAddress = { city: city, country: country };
  console.log(newAddress);

  console.log("Object Literals");

  const newAddress2 = { city, country };
  console.log(newAddress2);
}

AddressMaker("chennai", "india");
