# 🕒 @myangularapps/analog-clock

A lightweight reusable **Angular Analog Clock** component.

## 📦 Installation
**From npmjs.org:**
```
npm install @myangularapps/analog-clock
```
🚀 Usage

In your Angular component:
```
import { Component } from '@angular/core';
import { AnalogClock } from '@myangularapps/analog-clock';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnalogClock],
  template: `
    <analog-clock [options]="{ size: 200, showNumbers: true }"></analog-clock>
  `
})
export class AppComponent {}

```
## ⚙️ Options

| Option        | Type      | Defaut       | Description |
|----------------|----------|---------------|--------------|
| `size`         | `number` | `150`         | Clock diameter in pixels. |
| `showNumbers`  | `boolean`| `true`        | Display numbers 1–12 |
| `showTicks`    | `boolean`| `true`        | Show minute/hour ticks |
| `theme`        | `AnalogClockTheme`    | `default colors`        | Customize colors|
| `useLocalTime`        | `boolean`    | `true`        | Use system time|

🎨 Example Custom Theme
```
options = {
  size: 250,
  theme: {
    face: '#fff',
    border: '#000',
    hourHand: '#222',
    minuteHand: '#444',
    secondHand: '#e74c3c',
    number: '#333',
    hourMark: '#666'
  }
};
```
---

## 🔗 Live Demo

👉 [Click here to try Analog-Clock](https://myangularapps.github.io/Analog-Clock-App/)

---
📄 License
MIT © [Abdelwaheb AMMAR](https://www.linkedin.com/in/abdelwaheb-ammar/)


