// task 1 --------------------------------------------
const square = (num) => {
  let sqrt = Math.sqrt(num)
  
  if (Number.isInteger(sqrt) == true) {
    console.log(`kök - ${sqrt}`);
  } else {
    console.log('tam kök çıxmır');
  }
}

// task 2 -------------------------------------------
const whichLetter = (str) => {
  let sait = ''
  let samit = ''
  let lower = str.toLowerCase()
  
  for (let i of lower) {
    switch (i) {
      case 'a' :
      case 'e' :
      case 'ə' :
      case 'i' :
      case 'ı' :
      case 'o' :
      case 'ö' :
      case 'u' :
      case 'ü' :
        sait += i
        break;
      case ' ' :
        continue;
      default :
      samit += i
    }
  }

  console.log(`saitlər - ${sait}`);
  console.log(`saitlərin sayı - ${sait.length}`);
  console.log(`samitlər - ${samit}`);
  console.log(`samitlərin sayı - ${samit.length}`);
}

// task 3 -------------------------------------------
const combine = (arr) => {
  let result = ''

  for (let i of arr) {
    let str = i.toString()
    result += str
  }

  console.log(`cavab - ${result}`);
}

square(256)
whichLetter('hORiZon loREm')
combine([8, 'name', 30, 'lorem'])