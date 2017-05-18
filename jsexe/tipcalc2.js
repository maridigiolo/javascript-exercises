function totalAmount(bill, service) {
  if (service == "good") {
    bill = ((0.2 * bill) + bill)
  	console.log (`Tip Amount: ${bill}`);
  } else if (service == "fair") {
  	bill = ((0.15 * bill) + bill)
  	console.log (`Tip Amount: ${bill}`);
  } else if (service == "bad") {
  	bill = ((0.10 * bill) + bill)
  	console.log (`Tip Amount: ${bill}`);
  }
}

totalAmount(100, "good");
totalAmount(100, "fair");
totalAmount(100, "bad");
