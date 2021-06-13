function digital_root(n) {
  let result = 0;

  function sumFunction(number) {
    let sum = 0;
    const s = String(number);
    for (let i = 0; i < s.length; i++) {
      let c = Number(s.charAt(i));
      sum += c;
    }

    if (String(sum).length > 1) {
      sumFunction(sum);
    } else {
      result = sum;
    }
  }

  sumFunction(n);

  return result;
}
