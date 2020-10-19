module.exports = function toReadable (number) {
    if(number===0)
        return "zero";
    let third="";
    let second="";
    let first="";
    switch(number%10) {
        case(1): {
            first = "one";   
            break;
        }
        case(2): {
            first= "two";
            break;
        }
        case(3): {
            first= "three";
            break;
        }
        case(4): {
            first= "four";
            break;
        }
        case(5): {
            first= "five";
            break;
        }
        case(6): {
            first= "six";
            break;
        }
        case(7): {
            first= "seven";
            break;
        }
        case(8): {
            first= "eight";
            break;
        }
        case(9): {
            first= "nine";
            break;
        }
        default:{
            first= "";
            break;
        }
    }
    switch(Math.floor(number%100/10)) {
        case(2): {
            second="twenty";
            break;
        }
        case(3): {
            second="thirty";
            break;
        }
        case(4): {
            second="forty";
            break;
        }
        case(5): {
            second="fifty";
            break;
        }
        case(6): {
            second="sixty";
            break;
        }
        case(7): {
            second= "seventy";
            break;
        }
        case(8): {
            second= "eighty";
            break;
        }
        case(9): {
            second="ninety";
            break;
        }
        default:{
            if(number%100>9)
                first="";
            switch(number%100) {
                case(10):{
                    second="ten";
                    break;
                }
                case(11):{
                    second="eleven";
                    break;
                }
                case(12):{
                    second="twelve";
                    break;
                }
                case(13):{
                    second="thirteen";
                    break;
                }
                case(14):{
                    second="fourteen";
                    break;
                }
                case(15):{
                    second="fifteen";
                    break;
                }
                case(16):{
                    second="sixteen";
                    break;
                }
                case(17):{
                    second="seventeen";
                    break;
                }
                case(18):{
                    second="eighteen";
                    break;
                }
                case(19):{
                    second="nineteen";
                    break;
                }
            }
        }
    }

    switch(Math.floor(number/100)) {
        case(1):{
            third="one hundred";
            break;
        }
        case(2):{
            third="two hundred";
            break;
        }
        case(3):{
            third="three hundred";
            break;
        }
        case(4):{
            third="four hundred";
            break;
        }
        case(5):{
            third="five hundred";
            break;
        }
        case(6):{
            third="six hundred";
            break;
        }
        case(7):{
            third="seven hundred";
            break;
        }
        case(8):{
            third="eight hundred";
            break;
        }
        case(9):{
            third="nine hundred";
            break;
        }
        default:{
            third="";
            break;
        }
    }

    return ((third===""?"":third + " ") + (second===""?"":second + " ") + first).trim();

}
