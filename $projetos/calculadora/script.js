const previusOperationText = document.querySelector("#previus-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

class Calculator {
    constructor(previusOperationText, currentOperationText) {
        this.previusOperationText = previusOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    // Adicionar dígito à tela da calculadora
    addDigit(digit) {
        // Verificar se o dígito é um ponto e se já existe um ponto na operação atual
        if (digit === "." && this.currentOperation.includes(".")) {
            return;
        }

        this.currentOperation += digit;
        this.updateScreen();
    }

    // Processar operações da calculadora
    processOperation(operation) {
        let operationValue;
        let previus = +this.previusOperationText.innerText.split(" ")[0];
        let current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previus + current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "-":
                operationValue = previus - current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "/":
                operationValue = previus / current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            case "*":
                operationValue = previus * current;
                this.updateScreen(operationValue, operation, current, previus);
                break;
            default:
                return;
        }
    }

    // Atualizar o conteúdo da tela da calculadora
    updateScreen(operationValue = null, operation = null, current = null, previus = null) {
        if (operationValue === null) {
            this.currentOperationText.innerText = this.currentOperation;
        } else {
            // Verificar se o valor é zero
            if (previus === 0) {
                operationValue = current;
            }

            // Adicionar o valor atual ao anterior
            this.previusOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
            this.currentOperation = ""; // Limpar a operação atual
        }
    }
}

const calc = new Calculator(previusOperationText, currentOperationText);

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value >= "0" && value <= "9" || value === ".") {
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});
