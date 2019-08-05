





//     $('#calcfunctions a').click(function() {
//         switch ($(this).text()) {
//             case 'MR':
//                 totaldiv.text(memoryRecall);
//                 number = '';
//                 number = memoryRecall;
//                 break;
//             case 'MC':
//                 memoryRecall = '';
//                 $('#mr, #mc, #ms').addClass('disableClick');
//                 break;
//             case "M+":
//                 memoryRecall = number;
//                 $('#mr, #mc, #ms').removeClass('disableClick');
//                 number = '';
//                 memoryJustPressed = true;
//                 break;
//             case 'M-':
//                 memoryRecall = '';
//                 $('#mr, #mc, #ms').addClass('disableClick');
//                 break;
//             case 'MS':
//                 memoryRecall = '';
//                 $('#mr, #mc, #ms').addClass('disableClick');
//                 break;
//             default:
//         }

//     });






//     $('.operators').click(function() {
//         if (memoryJustPressed) {
//             number = memoryRecall;
//             memoryJustPressed = false;
//         }

//         if (operatorJustPressed) {
//             operator = operatorEnum[$(this).text()];
//             selectedOperator.text($(this).text());
//             return;
//         }

//         if (equalJustPressed) {
//             operator = operatorEnum[$(this).text()];
//             selectedOperator.text($(this).text());
//             number = '';
//             equalJustPressed = false;
//             return;
//         }

//         operator = operatorEnum[$(this).text()];

//         /*If newnumber === '', then only one operand was entered*/
//         if (newnumber !== '') {
//             switch (operator) {
//                 case 'add':
//                     calculatedTotal = (parseFloat(newnumber) + parseFloat(number)).toString();
//                     break;
//                 case 'subtract':
//                     calculatedTotal = (parseFloat(newnumber) - parseFloat(number)).toString();
//                     break;
//                 case 'multiply':
//                     calculatedTotal = (parseFloat(newnumber) * parseFloat(number)).toString();
//                     break;
//                 case 'divide':
//                     calculatedTotal = (parseFloat(newnumber) / parseFloat(number)).toString();
//                     break;
//                 default:
//                     totaldiv.text('Err');
//             };

//             if (!isNaN(calculatedTotal) && calculatedTotal.indexOf('.') != -1) {
//                 number = parseFloat(calculatedTotal).toFixed(5).toString();
//                 newnumber = parseFloat(calculatedTotal).toFixed(5).toString();
//             } else {
//                 number = calculatedTotal;
//                 newnumber = calculatedTotal;
//             }

//             totaldiv.text(calculatedTotal);
//         }
//         newnumber = number;
//         selectedOperator.text($(this).text());
//         number = '';
//         operatorJustPressed = true;
//         /*TEST Variables in console*/
//         testVariables();
//     });

//     $('.clear, .clearall').click(function() {
//         if ($(this).text() === 'AC') {
//             newnumber = '';
//         }
//         resetValue();
//     });
    


//     /*User clicks the equal key */
//     $('.equal').click(function() {

//         /*standard effect of a user pressing numbers and then operator followed by equals */
//         if (number === '') {
//             number = newnumber;
//         }
        
//         if(newnumber === ''){
//             return;
//         }

//         switch (operator) {
//             case 'add':
//                 calculatedTotal = (parseFloat(newnumber) + parseFloat(number)).toString();
//                 break;
//             case 'subtract':
//                 calculatedTotal = (parseFloat(newnumber) - parseFloat(number)).toString();
//                 break;
//             case 'multiply':
//                 calculatedTotal = (parseFloat(newnumber) * parseFloat(number)).toString();
//                 break;
//             case 'divide':
//                 calculatedTotal = (parseFloat(newnumber) / parseFloat(number)).toString();
//                 break;
//             default:
//                 totaldiv.text('Err');
//         };

//         if (!isNaN(calculatedTotal) && calculatedTotal.toString().indexOf('.') != -1) {
//             number = parseFloat(calculatedTotal).toFixed(5).toString();
//             totaldiv.text(parseFloat(calculatedTotal).toFixed(5).toString());
//         } else {
//             newnumber = calculatedTotal;
//             totaldiv.text(calculatedTotal);
//             equalJustPressed = true;
//         }

//         /*TEST Variables in console*/
//         testVariables();
//     }); //END $(".equal").click()

