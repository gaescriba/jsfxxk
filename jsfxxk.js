const jsfxxk = (size, input) => {
  //v1.0 dynamic array
  let initial = []
  let inputLen = input.length

  //initialize the array with 0s
  for(let i = 0; i < size; i++){
    initial.push(0)
  }

  //v1.0 internal switch (key) 
  let atIndex = 0
  for(let j = 0; j < inputLen; j++){
    const inputChar = input.charAt(j)

    switch(inputChar){
      case '>':
        atIndex++
      break
      case '<':
        atIndex--
      break
      case '+':
        initial[atIndex]++
      break
      case '-':
        initial[atIndex]--
      break
    }
  }
  console.log(initial)
}

//example, prints [1, 2, 7]
jsfxxk(3, '+>++>+++++++')
