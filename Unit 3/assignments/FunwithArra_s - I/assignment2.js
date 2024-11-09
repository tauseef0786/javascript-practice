// Problem1:Factorial_calculate
function calculateFactorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers';
    if (n === 0 || n === 1) return 1;
  
    let result = 1;
  
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }
  

  console.log(calculateFactorial(5)); // Expected Output: 120
  


// Problem2: Prime_Check
function isPrime(n) {
    if (n <= 1) return false; 
    if (n <= 3) return true;  
  
    if (n % 2 === 0 || n % 3 === 0) return false;
      for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
  
    return true;
  }
  
  console.log(isPrime(7)); // Expected Output: true
  console.log(isPrime(10)); // Expected Output: false
  


// Problem3:Find_Longest_Palindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
  }
  
  function findLongestPalindrome(strings) {
    let longestPalindrome = '';
  
    for (const str of strings) {
      if (isPalindrome(str) && str.length > longestPalindrome.length) {
        longestPalindrome = str;
      }
    }
  
    return longestPalindrome;
  }
  
  var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
  console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"
  

// Problem4:Unique_Character_Counter
function countUniqueCharacters(str) {
    const uniqueChars = new Set();
  
    for (const char of str) {
      if (char !== ' ') { 
        uniqueChars.add(char.toLowerCase()); 
      }
    }
  
    return uniqueChars.size;
  }
  
  console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)
  
