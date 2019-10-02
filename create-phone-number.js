function createPhoneNumber(numbers) {
  const areaCode = "(" + numbers[0] + numbers[1] + numbers[2] + ")";
  const first3 = " " + numbers[3] + numbers[4] + numbers[5];
  const last4 = "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]
  console.log(areaCode+first3+last4);
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,10]);