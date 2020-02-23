module.exports = function toReadable (number) {
  const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if (number < 20) return nums[number];
  if (number < 100) {
    return `${tens[number.toString()[0]]}${number % 10 === 0 ? '' : ' ' + nums[number.toString()[1]]}`;
  } 
  if (number < 1000) {
    if (number % 100 === 0) {
      return `${nums[number.toString()[0]]} hundred`
    }
    if (number % 100 < 20) {
      return `${nums[number.toString()[0]]} hundred ${nums[number % 100]}`;
    }
    if (number % 10 === 0) {
      return `${nums[number.toString()[0]]} hundred ${tens[number.toString()[1]]}`
    }
    return `${nums[number.toString()[0]]} hundred ${tens[number.toString()[1]]} ${nums[number.toString()[2]]}`;
  }
}