var romanToInt = function (s) {
  const romanNumbers = [
    {
      key: "I",
      value: 1,
    },
    {
      key: "V",
      value: 5,
    },
    {
      key: "X",
      value: 10,
    },
    {
      key: "L",
      value: 50,
    },
    {
      key: "C",
      value: 100,
    },
    {
      key: "D",
      value: 500,
    },
    {
      key: "M",
      value: 1000,
    },
  ];
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let convertNumber = romanNumbers.filter((e) => {
      if (s[i] === e.key) {
        return e.value;
      }
    })[0].value;

    let convertNumber2 = romanNumbers.filter((e) => {
      if (s[i + 1] === e.key) {
        return e.value;
      }
    })[0];
    if (convertNumber2 === undefined) {
      sum += parseInt(convertNumber);
      break;
    }
    if (convertNumber < convertNumber2.value) {
      sum += parseInt(convertNumber2.value) - parseInt(convertNumber);
      i++;
    } else {
      sum += parseInt(convertNumber);
    }
  }
  return sum;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IV"));
