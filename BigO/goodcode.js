const nemo = ['nemo'];
const everyone = ['tushar', 'nishi', 'nemo', 'nani', 'rinu', 'ratul', 'rubel', 'pratik'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
  for(let i = 0; i <= array.length; i++) {
    if(array[i] === 'nemo') {
      console.log('Found NEMO!');
    }
  }
}

findNemo(large); // O(n) --> Linear Time