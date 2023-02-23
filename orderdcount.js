function orderedCount(str) {
    // let result = [];
    // for (let i = 0; i < str.length; i++) {
    //   let count = 0;
    //   for (let j = 0; j < result.length; j++) {
    //     if (result[j][0] === str[i]) {
    //       count++;
    //     }
    //   }
    //   if (count === 0) {
    //     for (let j = i; j < str.length; j++) {
    //       if (str[j] === str[i]) {
    //         count++;
    //       }
    //     }
    //     result.push([str[i], count]);
    //   }
    // }
    // return result;




    //key is the character, value is the count returns them as an object
    let result = {}; 
    for (let i = 0; i < str.length; i++) {
      const character = (str[i])
      if (!result[character]){
        result[character] = 0
      }
      result[character]++
    
    }
    return result

  }

console.log(orderedCount("abracadabra"))
