class Form {
  constructor({ el, onSubmit }) {
    this.el = el;
    this.cb = onSubmit;

    this.render();
    this.onSubmit();
  }

  render() {
    this.el.innerHTML = `
    <form class="form">
      <textarea name="message"></textarea>
      <input type="submit" value="Отправить" class="send">
    </form>
    `;
  }

  // TODO: Передать сообщения в массив data через app.js
  onSubmit() {
    this.el.addEventListener('submit', (e) => {
      const el = e.target;
      e.preventDefault();
      const text = el.querySelector('[name="message"]').value;
      this.cb({ text });
      el.reset();
    });
  }
}
