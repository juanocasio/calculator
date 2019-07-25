let number = '';
let newnumber = '';
let memoryRecall = '';
let operator = '';
let plusMinus = '';
let equalJustPressed = false;
let dotPressed = false;
let memoryJustPressed = false;
let operatorJustPressed = false;
let calculatedTotal = '';
const totaldiv = document.getElementById('total');
const selectedOperator = document.getElementById('selectedOperator');
const operatorEnum = {
  '÷': 'divide',
  '×': 'multiply',
  '−': 'subtract',
  '+': 'add'
};

const testNumLength = function(number) {
  if (number.length > 8) {
    totaldiv.innerText = number.substr(number.length - 8, 8);
    if (number.length > 15) {
      number = '';
      totaldiv.innerText = 'Err';
    }
  }
};

totaldiv.innerText = '0';

const calcFunctionBtns = document
  .querySelectorAll('#calcfunctions a')
  .forEach(function(item) {
    item.addEventListener('click', function() {
      switch (this.innerHTML) {
        case 'MR':
          console.log('MR');
          break;
        case 'MC':
          console.log('MC');
          break;
        case 'M+':
          console.log('M+');
          break;
        case 'M-':
          console.log('M-');
          break;
        case 'MS':
          console.log('MS');
      }
    });
  });

const numberBtns = document
  .querySelectorAll('.numbers')
  .forEach(function(numberBtn) {
    numberBtn.addEventListener('click', function() {
      if (equalJustPressed) {
      }

      if (number === '' && this.innerHTML === '0') {
        return;
      }

      number += this.innerHTML;
      totaldiv.innerHTML = number;
      testNumLength(number);
      testVariables();
    });
  });

// $('.numbers').click(function() {
//   /*        If the equal key was just pressed clean up is needed:
//             reset the number to key that was just pressed
//             reset screen to number variable value
//             set equalJustPressed to false*/
//   if (equalJustPressed) {
//     number = $(this).text();
//     totaldiv.text(number);
//     equalJustPressed = false;
//     return;
//   }

//   if (number === '' && $(this).text() === '0') {
//     return;
//   }

//   number += $(this).text();
//   totaldiv.innerHTML = number;
//   testNumLength(number);
//   operatorJustPressed = false;
//   /*TEST Variables in console*/
//   testVariables();
// });

function testVariables() {
  console.clear();
  console.log('number: ' + number);
  console.log('newnumber: ' + newnumber);
  console.log('operator: ' + operator);
  console.log('selectedOperator: ' + selectedOperator.innerHTML);
  console.log('memoryRecall: ' + memoryRecall);
  console.log('equalJustPressed: ' + equalJustPressed);
  console.log('operatorJustPressed: ' + operatorJustPressed);
  console.log('calculatedTotal: ' + calculatedTotal);
}
