var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);

calculator.updateSettings({ expressionsCollapsed: true });


elt.style.width = window.innerWidth+'px';
elt.style.height = String(Number(window.innerHeight)*0.85)+'px';
calculator.resize();

const space_length = 3
var validInput = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '/']
var color_code = 0

function equations(eqn) {
    switch (eqn) {
        case 1: return `(x- ${x} )=0.25(y- ${y} )\\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 2: return `(y-${y})=5   \\left\\{${x + 1.25}<=x<=${x + 3.75}\\right\\}`; break;
        case 3: return `(x- ${x + 5} )=-0.25(y- ${y} )\\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 4: return `(x-${x})=0   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 5: return `(y-${y})=10   \\left\\{${x}<=x<=${x + 2.5}\\right\\}`; break;
        case 6: return `(y-${y})=5   \\left\\{${x}<=x<=${x + 2.5}\\right\\}`; break;
        case 7: return `(y-${y})=0   \\left\\{${x}<=x<=${x + 2.5}\\right\\}`; break;
        case 8: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=(2.5)^2   \\left\\{${x + 2.5}<=x\\right\\}`; break;
        case 9: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=(2.5)^2   \\left\\{${x + 2.5}<=x\\right\\}`; break;
        case 10: return `(((x-${x + 3.75})^2)/14.0625)+(((y-${y + 5})^2)/25)=1   \\left\\{x<=${x + 5}\\right\\}`; break;
        case 11: return `(((x-${x + 2.5})^2)/6.25)+(((y-${y + 5})^2)/25)=1   \\left\\{${x + 2.5}<=x\\right\\}`; break;
        case 12: return `(y-${y})=10   \\left\\{${x}<=x<=${x + 5}\\right\\}`; break;
        case 13: return `(y-${y})=5   \\left\\{${x}<=x<=${x + 5}\\right\\}`; break;
        case 14: return `(y-${y})=0   \\left\\{${x}<=x<=${x + 5}\\right\\}`; break;
        case 15: return `(x-${x})=5   \\left\\{${y + 0.286}<=y<=${y + 5}\\right\\}`; break;
        case 16: return `(y-${y})=5   \\left\\{${x + 2.5}<=x<=${x + 5}\\right\\}`; break;
        case 17: return `(x-${x})=5   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 18: return `(x-${x})=2.5   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 19: return `(x-${x})=5   \\left\\{${y + 2.5}<=y<=${y + 10}\\right\\}`; break;
        case 20: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=(2.5)^2   \\left\\{y<=${y + 2.5}\\right\\}`; break;
        case 21: return `(x-${x})=(y-${y + 5})   \\left\\{${x}<=x<=${x + 5}\\right\\}`; break;
        case 22: return `(x-${x})=-(y-${y + 5})   \\left\\{${x}<=x<=${x + 5}\\right\\}`; break;
        case 23: return `(x-${x})=-0.5(y-${y})+5  \\left\\{${y + 5}<=y<=${y + 10}\\right\\}`; break;
        case 24: return `(x-${x})=0.5(y-${y})   \\left\\{${y + 5}<=y<=${y + 10}\\right\\}`; break;
        case 25: return `(x-${x})=-0.5(y-${y})+5   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 26: return `(((x-${x + 2.5})^2)/6.25)+(((y-${y}-5)^2)/25)=1`; break;
        case 27: return `(x-${x})=-0.5(y-${y})+5   \\left\\{${y}<=y<=${y + 5}\\right\\}`; break;
        case 28: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=(2.5)^2   \\left\\{y>=${y + 7.5}\\right\\}`; break;
        case 29: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=(2.5)^2   \\left\\{y<=${y + 7.5}\\right\\}\\left\\{x<=${x + 2.5}\\right\\}`; break;
        case 30: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=(2.5)^2   \\left\\{y>=${y + 2.5}\\right\\}\\left\\{x>=${x + 2.5}\\right\\}`; break;
        case 31: return `(x-${x})=0   \\left\\{${y + 5}<=y<=${y + 10}\\right\\}`; break;
        case 32: return `(x-${x})=5   \\left\\{${y + 5}<=y<=${y + 10}\\right\\}`; break;
        case 33: return `(((x-${x + 2.5})^2)/6.25)+(((y-${y + 5})^2)/25)=1   \\left\\{y<=${y + 5}\\right\\}`; break;
        case 34: return `(x-${x + 2.5})=-0.25(y-${y})   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 35: return `(x-${x + 2.5})=0.25(y-${y})   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 36: return `(x-${x})=0.5(y-${y})   \\left\\{${y}<=y<=${y + 5}\\right\\}`; break;
        case 37: return `(x-${x})=-0.5(y-${y})+5   \\left\\{${y}<=y<=${y + 5}\\right\\}`; break;
        case 38: return `(x-${x})=0.5(y-${y})   \\left\\{${y}<=y<=${y + 10}\\right\\}`; break;
        case 39: return `(x-${x})=(y-${y})-7.5   \\left\\{${x}<=x<=${x + 2.5}\\right\\}`; break;
        case 40: return `(x-${x})=(2/3)(y-${y})   \\left\\{${y}<=y<=${y + 7.5}\\right\\}`; break;
        case 41: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=6.25   \\left\\{y>=${y + 8}\\right\\}\\left\\{x<=${x + 2.5}\\right\\}`; break;
        case 42: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=6.25   \\left\\{y<=${y + 2}\\right\\}\\left\\{x<=${x + 2.5}\\right\\}`; break;
        case 43: return `(((x-${x + 3})^2)/9)+(((y-${y + 3})^2)/49)=1   \\left\\{y>=${y + 3}\\right\\}\\left\\{x<=${x + 5}\\right\\}`; break;
        case 44: return `(((x-${x + 2.5})^2)/6.25)+(((y-${y + 3})^2)/9)=1`; break;
        case 45: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=6.25`; break;
        case 46: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=6.25`; break;
        case 47: return `(((x-${x + 2.5})^2)/6.25)+(((y-${y + 7})^2)/9)=1`; break;
        case 48: return `(((x-${x + 3})^2)/9)+(((y-${y + 7})^2)/49)=1   \\left\\{y<=${y + 7}\\right\\}\\left\\{x<=${x + 5}\\right\\}`; break;
        case 49: return `(x-${x})=0   \\left\\{${y + 2.5}<=y<=${y + 7.5}\\right\\}`; break;
        case 50: return `(x-${x})=5   \\left\\{${y + 2.5}<=y<=${y + 7.5}\\right\\}`; break;
        case 51: return `((x-${x + 2.5})^2)+((y-${y + 7.5})^2)=6.25   \\left\\{y>=${y + 7.5}\\right\\}`; break;
        case 52: return `((x-${x + 2.5})^2)+((y-${y + 2.5})^2)=6.25   \\left\\{y<=${y + 2.5}\\right\\}`; break;
        default:
            alert("Switch Case Not Available")
            return ''
    }
}

const eqn_id = {
    A: [1, 2, 3],
    B: [4, 5, 6, 7, 8, 9],
    C: [10],
    D: [4, 5, 7, 11],
    E: [4, 12, 13, 14],
    F: [4, 12, 13],
    G: [10, 15, 16],
    H: [4, 13, 17],
    I: [12, 14, 18],
    J: [19, 20],
    K: [4, 21, 22],
    L: [4, 14],
    M: [4, 23, 24, 17],
    N: [4, 25, 17],
    O: [26],
    P: [4, 5, 6, 8],
    Q: [26, 27],
    R: [4, 5, 6, 8, 27],
    S: [28, 29, 30, 20],
    T: [12, 18],
    U: [31, 32, 33],
    V: [34, 35],
    W: [4, 36, 37, 17],
    X: [25, 38],
    Y: [23, 38],
    Z: [12, 14, 38],
    "1": [18, 39, 14],
    "2": [28, 40, 14],
    "3": [41, 42, 8, 9],
    "4": [31, 13, 17],
    "5": [12, 31, 6, 9, 42],
    "6": [43, 44],
    "7": [12, 38],
    "8": [45, 46],
    "9": [47, 48],
    "0": [49, 50, 51, 52]
};

function change_color(input_code){
    color_code = input_code
  }

function validInput_check(input) {
    for (i = 0, len = input.length; i < len; i++) {
      if (!(validInput.includes(input[i]))) { 
        return false;
      }
    }
    return true;
  };


function plot(user_input) {
    let text = user_input.toUpperCase();
    
    if(validInput_check(text)) {
        calculator.setBlank()
        no_line = text.split("/").length-1;
        x = 10;
        y = 10+(12*no_line);
        

        for (let i = 0; i < text.length; i++) {
            if (text[i] == " ") { 
                x = x + space_length
            }
            else if (text[i] == "/") {
                y = y- 12
                x = 10
            }
            else {
                for (let j = 0; j < eqn_id[text[i]].length; j++) {
                    switch( color_code ){
                        case "0": calculator.setExpression({ latex: equations(eqn_id[text[i]][j])});  break;
                        case "1": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color: Desmos.Colors.RED }); break;
                        case "2": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color:  Desmos.Colors.BLUE}); break;
                        case "3": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color:  Desmos.Colors.GREEN}); break;
                        case "4": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color:  Desmos.Colors.PURPLE}); break;
                        case "5": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color:  Desmos.Colors.ORANGE}); break;
                        case "6": calculator.setExpression({ latex: equations(eqn_id[text[i]][j]), color:  Desmos.Colors.BLACK}); break;
                        default: alert("Something went wrong")
                    }
                }
                x = x + 6
            }}

        // calculator.setMathBounds({
        //     left: 0,
        //     right: ,
        //     bottom: y,
        //     top: 10
        //   });

    }else {
        alert('Only AlphaNum and "/" is accepted as an input')
    }

}



