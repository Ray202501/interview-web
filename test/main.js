class MyCounter extends HTMLElement {
  constructor() {
    super();
    this._count = 0;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.createTemplate());
    this.incrementBtn = this.shadowRoot.querySelector('.increment');
    this.decrementBtn = this.shadowRoot.querySelector('.decrement');
    this.counterDisplay = this.shadowRoot.querySelector('#counter');
  }

  createTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        .counter-container {
          display: flex;
          align-items: center;
        }
        button {
          margin: 0 10px;
        }
      </style>
      <h3>Counters:</h3>
      <div class="counter-container">
        <button class="increment">+</button>
        <span id="counter">0</span>
        <button class="decrement">-</button>
      </div>
    `;
    return template.content.cloneNode(true);
  }

  connectedCallback() {
    this.incrementBtn.addEventListener('click', () => this.increment());
    this.decrementBtn.addEventListener('click', () => this.decrement());
  }

  increment() {
    this._count++;
    this.updateCount();
  }

  decrement() {
    if (this._count > 0) {
      this._count--;
      this.updateCount();
    }
  }

  updateCount() {
    this.counterDisplay.textContent = this._count;
  }
}

customElements.define('my-counter', MyCounter);

