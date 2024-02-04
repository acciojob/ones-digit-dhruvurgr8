function onesDigit(n) {
  let num = String(n);
	return num[num.length-1]
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
