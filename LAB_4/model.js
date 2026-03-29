const Model = {
  operand1: null,
  operand2: null,
  operator: null,
  displayValue: "0",
  waitingForSecond: false,

  inputDigit(digit) {
    if (this.waitingForSecond) {
      this.displayValue = digit;
      this.waitingForSecond = false;
    } else {
      this.displayValue =
        this.displayValue === "0" ? digit : this.displayValue + digit;
    }
  },

  setOperator(op) {
    if (this.operator && !this.waitingForSecond) {
      this.calculate();
    }
    this.operand1 = parseFloat(this.displayValue);
    this.operator = op;
    this.waitingForSecond = true;
  },

  calculate() {
    this.operand2 = parseFloat(this.displayValue);

    if (this.operator === "/" && this.operand2 === 0) {
      this.displayValue = "Error";
      this.clearAll();
      return;
    }

    let result;
    switch (this.operator) {
      case "+":
        result = this.operand1 + this.operand2;
        break;
      case "-":
        result = this.operand1 - this.operand2;
        break;
      case "*":
        result = this.operand1 * this.operand2;
        break;
      case "/":
        result = this.operand1 / this.operand2;
        break;
      default:
        return;
    }

    this.displayValue = result.toString();
    this.operator = null;
    this.waitingForSecond = false;
  },

  clearAll() {
    this.operand1 = null;
    this.operand2 = null;
    this.operator = null;
    this.displayValue = "0";
    this.waitingForSecond = false;
  }
};