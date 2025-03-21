const equilibrio = (hola) => {
    
    let delimitadores = ["()", "{}", "[]"];

    for (let i = 0; i < hola.length; i++) {
        let expresion = hola[i];

        if (expresion == '(', '{', '[') {
            console.log("Equilibrados")
        }
        
        else if (expresion == ')', '}', ']') {
            console.log("Equilibrados")
            }

        else {
            console.log("No equilibrados")
            }
        }
    }

console.log(equilibrio ("()"))
