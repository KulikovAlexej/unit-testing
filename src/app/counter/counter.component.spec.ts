import { FormBuilder } from '@angular/forms';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent(new FormBuilder());
  });

  // beforeAll, afterEach, afterAll

  it('should increment counter by 1', () => {
    component.increment();
    expect(component.counter).toBe(1);
  });

  it('should decrement counter by 1', () => {
    component.decrement();
    expect(component.counter).toBe(-1);
  });

  it('should increment value by event emitter', () => {
    let result = null;
    component.counterEmitter.subscribe(v => (result = v));

    component.increment();

    expect(result).toBe(1);
  });

  it('form has login and email field', () => {
    expect(component.form.contains('login')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should invalid if form is empty', () => {
    expect(component.form.invalid).toBeTruthy();
  });

  it('should correct if form has login', () => {
    const form = component.form;
    const loginCtrl = form.get('login');
    loginCtrl.setValue('Alex96');
    expect(component.form.valid).toBeTruthy();
  });

  it('should uncorrect if form has incorrect email', () => {
    const form = component.form;
    const emailCtrl = form.get('email');
    const loginCtrl = form.get('login');
    loginCtrl.setValue('Alex96');
    emailCtrl.setValue('alex@mail');
    expect(component.form.valid).toBeTruthy();
  });
});
