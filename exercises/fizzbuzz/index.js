// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for(let i = 1; i <= n ; i++){
    if( i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz')
    }else if (i % 5 === 0){
      console.log('buzz')
    }else if (i % 3 === 0){
      console.log('fizz')
    }else console.log(i)
  }

}

//return a 2D string array , 
//imageUrls = an array containing 1 or many 2 item arrays 


// const imageUrl=[['wwww.thisimage.com', '90023230230'], ['wwww.secondimage.com', '10230230']]

function validateImageSizessss(imageUrls, maxSize){
  let oneKB = 1000
  let oneMB = 1000000
  let oneGB = 1000000000

  let validArray = []
  for(let i = 0 ; i <imageUrls.length; i++){
    for(let j = 0; j < imageUrls[i].length; j++){
      // console.log(imageUrls, "image urls")
      // console.log(imageUrls[0][0], "first array")
      // console.log(imageUrls[i][1], "this is i")
      // console.log(parseInt(imageUrls[i][1]), "this is i number")

      if(parseInt(imageUrls[i][1]) > maxSize){
        validArray.push([imageUrl[i][0], "FALSE"])
      }else if(parseInt(imageUrls[i][1]) < maxSize){
        validArray.push([imageUrl[i][0], "TRUE"])
      }
      console.log(parseInt(imageUrls[j][1]), "parseINt console")
    
  }

  }
  console.log(validArray)
}

// validateImageSize(imageUrl, "900232302300000")

const imageUrl=[['wwww.thisimage.com', '90023230230'], ['wwww.secondimage.com', '10230230']]
function validateImageSize(imageUrls, maxSize){

  let oneKB = 1000 
  let oneMB = 1000000 
  let oneGB = 1000000000 

  let validArray=[]
  
  for(let i = 0; i < imageUrls.length; i++){
    if(parseInt(imageUrls[i][1])/oneGB > 1){
        validArray.push([imageUrls[i][0], "FALSE"])
    }else {
      validArray.push([imageUrls[i][0], "TRUE"])
    }

  }
  return validArray
}

validateImageSize(imageUrl, '3GB')

module.exports = fizzBuzz;
