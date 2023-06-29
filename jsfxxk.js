const jsfxxk = (input) => {
  
  let initial = []
  let inputLen = input.length

  //v1.1 fixed size array, very element initialized to 0
  for(let i = 0; i < 500; i++){
    initial.push(0)
  }

  //v1.1 internal switch 
  //added . support
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
      case '.':
        const final = initial.slice(0, atIndex + 1)
        const result = final.join('')
        console.log(result)
      break
    }
  }
}

//example, prints 127 
jsfxxk('+>++>+++++++.')
