console.log("Rest Operator");

function show(num) {
  console.log(num);
  console.log(arguments);
}

show(1, 2, 3, 4, 5, 6);

//Arguments are deprecated

function show2(...num) {
  console.log(num);
}

show2(1, 2, 3, 4, 5, 6);
