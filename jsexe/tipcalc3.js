function splitAmount(bill, service, people) {
  var split;
  if (service == "good") {
    bill = ((0.2 * bill) + bill);
    split = bill/people;
  	console.log (`Split Amount: ${split}`);
  } else if (service == "fair") {
  	bill = ((0.15 * bill) + bill);
    split = bill/people;
  	console.log (`Split Amount: ${split}`);
  } else if (service == "bad") {
  	bill = ((0.10 * bill) + bill);
    split = bill/people;
  	console.log (`Split Amount: ${split}`);
  }
}

splitAmount(100, "good", 5)
splitAmount(40, "fair", 2)
splitAmount(100, "bad", 2)
