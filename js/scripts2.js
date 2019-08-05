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

const switchToggle = document
.getElementById('switchtoggle')
.addEventListener('change', function(){
  const pageStyle = document.getElementById('pagestyle');
  // @ts-ignore
  if (this.checked){
    pageStyle.setAttribute('href','css/lightstyles.css');
  }else{
    pageStyle.setAttribute('href','css/darkstyles.css');
  }
  console.log(this);
});


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

const plusMinusBtn = document
  .getElementById('plusminus')
  .addEventListener('click', function() {
    if (plusMinus === '') {
      number = '-' + number;
      totaldiv.innerHTML = number;
      plusMinus = '-';
    } else {
      number = number.replace('-', '');
      totaldiv.innerHTML = number;
      plusMinus = '';
    }
    console.log(this.innerHTML);
  });

const percentageBtn = document
  .getElementById('percentage')
  .addEventListener('click', function() {
    if (newnumber === '') {
      resetValue();
    } else if (number === '') {
      number = (
        (parseFloat(newnumber) * parseFloat(newnumber)) /
        100
      ).toString();
    }
  });

  const dotBtn = document
  .getElementById('dot')
  .addEventListener('click', function() {
    if (dotPressed){
      return;
    }

    if(number === ''){
      number = '0' + this.innerHTML
    } else {
      number += this.innerHTML;
    }
    totaldiv.innerHTML = number;
    dotPressed = true;
  });

  const clearEntryBtn = document
  .getElementById('clear')
  .addEventListener('click', function (){
    number = '';
    totaldiv.innerHTML = '0';
  });

  const clearAll = document
  .getElementById('clearall')
  .addEventListener('click', function () {
    newnumber = '';
    resetValue();
  });


function resetValue() {
  number = '';
  dotPressed = false;
  totaldiv.innerHTML = '0';
  selectedOperator.innerHTML = '';
  equalJustPressed = false;
  operatorJustPressed = false;
  //$('#mr, #mc, #ms').addClass('disableClick');
  dotPressed = false;
  testVariables();
}

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
