$(document).ready(function() {
    var testNumLength = function(number) {
        if (number.length > 8) {
            totaldiv.text(number.substr(number.length - 8, 8));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = '';
    var newnumber = '';
    var totaldiv = $('#total');
    var memoryRecall = "";
    var selectedOperator = $('#selectedOperator');
    var operator = '';
    var plusMinus = '';
    var equalJustPressed = false;
    var dotPressed = false;
    var memoryJustPressed = false;
    var operatorJustPressed = false;
    var calculatedTotal = '';
    var operatorEnum = {
        '÷': 'divide',
        '×': 'multiply',
        '−': 'subtract',
        '+': 'add'
    };



    totaldiv.text('0');

    $('#calcfunctions a').click(function() {
        switch ($(this).text()) {
            case 'MR':
                totaldiv.text(memoryRecall);
                number = '';
                number = memoryRecall;
                break;
            case 'MC':
                memoryRecall = '';
                $('#mr, #mc, #ms').addClass('disableClick');
                break;
            case "M+":
                memoryRecall = number;
                $('#mr, #mc, #ms').removeClass('disableClick');
                number = '';
                memoryJustPressed = true;
                break;
            case 'M-':
                memoryRecall = '';
                $('#mr, #mc, #ms').addClass('disableClick');
                break;
            case 'MS':
                memoryRecall = '';
                $('#mr, #mc, #ms').addClass('disableClick');
                break;
            default:
        }

    });

    $('.plusminus').click(function() {
        /*test if plusminus is in initial state, which represents positive or plus */
        if (plusMinus === '') {
            number = '-' + number;
            totaldiv.text( number);
            plusMinus = '-';
        } else {
            number = number.replace('-', '');
            totaldiv.text( number);
            plusMinus = '';
        }
    });


    $('.numbers').click(function() {
/*        If the equal key was just pressed clean up is needed:
            reset the number to key that was just pressed
            reset screen to number variable value
            set equalJustPressed to false*/
        if (equalJustPressed) {
            number = $(this).text();;
            totaldiv.text(number);
            equalJustPressed = false;
            return;
        }
        
        if(number === '' && $(this).text() === '0'){
            return;
        }

        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
        operatorJustPressed = false;
        /*TEST Variables in console*/
        testVariables();
    });

    $('.percentage').click(function() {
        
        if (newnumber === '') {
            resetValue();
        } else if (number === '') {
            number = ((parseFloat(newnumber) * parseFloat(newnumber)) / 100).toString();
            totaldiv.text(number);
        } else {
            number = ((parseFloat(newnumber) * parseFloat(number)) / 100).toString();
            totaldiv.text(number);
        }

        /*TEST Variables in console*/
        testVariables();
    });

    $('.operators').click(function() {
        if (memoryJustPressed) {
            number = memoryRecall;
            memoryJustPressed = false;
        }

        if (operatorJustPressed) {
            operator = operatorEnum[$(this).text()];
            selectedOperator.text($(this).text());
            return;
        }

        if (equalJustPressed) {
            operator = operatorEnum[$(this).text()];
            selectedOperator.text($(this).text());
            number = '';
            equalJustPressed = false;
            return;
        }

        operator = operatorEnum[$(this).text()];

        /*If newnumber === '', then only one operand was entered*/
        if (newnumber !== '') {
            switch (operator) {
                case 'add':
                    calculatedTotal = (parseFloat(newnumber) + parseFloat(number)).toString();
                    break;
                case 'subtract':
                    calculatedTotal = (parseFloat(newnumber) - parseFloat(number)).toString();
                    break;
                case 'multiply':
                    calculatedTotal = (parseFloat(newnumber) * parseFloat(number)).toString();
                    break;
                case 'divide':
                    calculatedTotal = (parseFloat(newnumber) / parseFloat(number)).toString();
                    break;
                default:
                    totaldiv.text('Err');
            };

            if (!isNaN(calculatedTotal) && calculatedTotal.indexOf('.') != -1) {
                number = parseFloat(calculatedTotal).toFixed(5).toString();
                newnumber = parseFloat(calculatedTotal).toFixed(5).toString();
            } else {
                number = calculatedTotal;
                newnumber = calculatedTotal;
            }

            totaldiv.text(calculatedTotal);
        }
        newnumber = number;
        selectedOperator.text($(this).text());
        number = '';
        operatorJustPressed = true;
        /*TEST Variables in console*/
        testVariables();
    });

    $('.clear, .clearall').click(function() {
        if ($(this).text() === 'AC') {
            newnumber = '';
        }
        resetValue();
    });
    
    $('.dot').click(function(){
      
        if (dotPressed){
          return;
        }
        if(number === ''){
            number = '0' + $(this).text();
        }else{
            number += $(this).text();
        }
        totaldiv.text(number);
        dotPressed = true;
        
    });

    /*User clicks the equal key */
    $('.equal').click(function() {

        /*standard effect of a user pressing numbers and then operator followed by equals */
        if (number === '') {
            number = newnumber;
        }
        
        if(newnumber === ''){
            return;
        }

        switch (operator) {
            case 'add':
                calculatedTotal = (parseFloat(newnumber) + parseFloat(number)).toString();
                break;
            case 'subtract':
                calculatedTotal = (parseFloat(newnumber) - parseFloat(number)).toString();
                break;
            case 'multiply':
                calculatedTotal = (parseFloat(newnumber) * parseFloat(number)).toString();
                break;
            case 'divide':
                calculatedTotal = (parseFloat(newnumber) / parseFloat(number)).toString();
                break;
            default:
                totaldiv.text('Err');
        };

        if (!isNaN(calculatedTotal) && calculatedTotal.toString().indexOf('.') != -1) {
            number = parseFloat(calculatedTotal).toFixed(5).toString();
            totaldiv.text(parseFloat(calculatedTotal).toFixed(5).toString());
        } else {
            newnumber = calculatedTotal;
            totaldiv.text(calculatedTotal);
            equalJustPressed = true;
        }

        /*TEST Variables in console*/
        testVariables();
    }); //END $(".equal").click()

    function resetValue() {
        number = "";
        dotPressed = false;
        totaldiv.text('0');
        selectedOperator.text('');
        equalJustPressed = false;
        operatorJustPressed = false;
        $('#mr, #mc, #ms').addClass('disableClick');
        dotPressed = false;
        testVariables();
    }

    function testVariables() {
        console.clear();
        console.log('number: ' + number);
        console.log('newnumber: ' + newnumber);
        console.log('operator: ' + operator);
        console.log('selectedOperator: ' + selectedOperator.text());
        console.log('memoryRecall: ' + memoryRecall);
        console.log('equalJustPressed: ' + equalJustPressed);
        console.log('operatorJustPressed: ' + operatorJustPressed);
        console.log('calculatedTotal: ' + calculatedTotal);
    }
});