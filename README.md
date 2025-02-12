# 🚀 Angular OnPush Change Detection Performance Demo

This project demonstrates the performance benefits of using the **OnPush** change detection strategy in Angular. It visually compares the rendering behavior and performance of components with the default **ChangeDetectionStrategy.Default** versus **ChangeDetectionStrategy.OnPush**. You will observe how **OnPush** reduces unnecessary change detection cycles, resulting in more efficient rendering.

📖 **Read the full explanation on Medium**:
🔗 [Optimizing Angular Rendering with OnPush Strategy: A Performance Guide ( Demo)](#)

🎯 **Try the Live Demo**:
🚀 [Angular OnPush Change Detection Demo](#)

## ⚡ Features
- **OnPush Strategy**: The demo shows how the OnPush strategy minimizes change detection cycles.
- **Optimized vs. Unoptimized Rendering**: Visualize the impact of **OnPush** in components by comparing optimized versus unoptimized performance.
- **Triggering Change Detection**: Understand when **OnPush** triggers change detection:
    - When new references are passed to `@Input()` properties.
    - When events inside the component (e.g., user interactions) trigger change detection.
    - When Observables emit new values or async pipes update.
    - When **markForCheck()** is explicitly called for manual triggering.

## 🧐 When will Change Detection be Triggered in OnPush?
- **Triggered**:
    - A new reference is passed to an `@Input()` property.
    - A user interaction or event inside the component.
    - An Observable or async pipe emits a new value.
    - **markForCheck()** is called explicitly (manual detection).
  
- **Not Triggered**:
    - When an object's property is mutated (reference doesn't change).
    - When arrays, Maps, or Sets are mutated without changing the reference.
