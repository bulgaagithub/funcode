var intToRoman = function (num) {
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
    let start = 0;
    let end = 0; 
    let convertNumber = "";
    if (num > 9) {
        let m = Math.floor(num / 1000);
        num = num - m*1000;
        let c = Math.floor(num / 100);
        num = num - c*100;
        let x = Math.floor(num / 10);
        num = num - x*10;
        let i = num;
    } else {
        convertNumber = romanNumbers.filter((e) => {
            if (parseInt(num) === parseInt(e.value)) {
                return e.key;
            }
        })[0].key;
        end++;
        console.log(convertNumber);
    }

    // return numum;
  };
  
//   console.log(romanToInt("MCMXCIV"));
//   console.log(romanToInt("LVIII"));
//   console.log(romanToInt("IV"));

intToRoman(1)
// intToRoman(3)
intToRoman(5);
intToRoman(10);
intToRoman(1994);
