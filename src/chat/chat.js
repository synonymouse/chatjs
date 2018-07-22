class Chat {
  constructor({ el, data }) {
    this.el = el;
    this.data = data;
    this.setMessages();
  }

  render() {
    this.el.innerHTML += `
    <div class="chat">
    ${this.setMessages.author} : ${this.setMessages.text}
    </div>
    `;
  }

  setMessages() {
    this.data.message.forEach((e, i) => {
      if (e.author) {
        this.setMessages.author = e.author;
      }
      // TODO: Добавить вывод последнего сообщения вместо всего массива onSubmit()
      this.setMessages.text = e.text;
    });
    this.render();
  }
}
