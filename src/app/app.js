import { Chat } from '../chat/chat.js';
import { Form } from '../form/form.js';

export class App {
  constructor(el) {
    this.el = el;
    this.init();
  }

  init() {
    this.chat = new Chat({
      el: document.createElement('div'),
      data: {
        message: [{ text: 'Хуй ебрило!', author: 'Пук' }, { text: 'Пыщ!', author: 'Петра' }],
      },
    });
    this.form = new Form({
      el: document.createElement('div'),
      onSubmit: (message) => {
        this.chat.data.message.push(message);
        // console.log(this.chat.data.message)
        this.chat.setMessages();
      },
    });
    this.render();
  }

  render() {
    this.el.append(this.chat.el);
    this.el.append(this.form.el);
  }
}
