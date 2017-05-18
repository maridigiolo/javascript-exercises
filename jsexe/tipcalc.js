function tipAmount(bill, service) {
  var tip;
  if (service == "good") {
    tip = (0.2 * bill)
  	console.log (`Tip Amount: ${tip}`);
  } else if (service == "fair") {
  	tip = (0.15 * bill)
  	console.log (`Tip Amount: ${tip}`);
  } else if (service == "bad") {
  	tip = (0.10 * bill)
  	console.log (`Tip Amount: ${tip}`);
  }
}

tipAmount(100, "good");
tipAmount(100, "fair");
tipAmount(100, "bad");
