const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (!isNaN(value)) {
      Model.inputDigit(value);
      View.update(Model.displayValue);
    } 
    else if (value === "C") {
      Model.clearAll();
      View.update(Model.displayValue);
    } 
    else if (value === "=") {
      Model.calculate();
      View.update(Model.displayValue);
    } 
    else {
      Model.setOperator(value);
    }
  });
});