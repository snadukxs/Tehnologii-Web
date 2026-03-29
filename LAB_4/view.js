const View = {
  display: document.getElementById("display"),

  update(value) {
    this.display.textContent = value;
  }
};