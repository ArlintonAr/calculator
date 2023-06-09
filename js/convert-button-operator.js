import getContentOperators from './content-operator.js'

export default function buttonConvertOperator(index) {
    let operator  
    switch (index) {
            case 0:
                operator ='<i class="fa-solid fa-percent"></i>';
                break;
            case 1:
                operator = '<i class="fa-solid fa-superscript"></i>';
                break;
            case 2:
                operator = '<i class="fa-solid fa-square-root-variable"></i>';
                break;
            case 3:
                operator = ' / ';
                break;
            case 4:
                operator = ' x ';
                break;
            case 5:
                operator = ' + ';
                break;
            case 6:
                operator = ' - ';
                break;
            default:
                break;
        }
       return operator
}
