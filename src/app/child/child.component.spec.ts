import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Learning Unit Testing
  it('testing number', () => {
    expect(component.number).toBe(0);
  })
  it('testing child function', () => {
    expect(component.child()).toBe('child');
  })

  it('testing sum function', ()=> {
    expect(component.sum(10,20)).toBe(30);
  })
  it('testing HTML element', ()=> {
    const data = fixture.nativeElement;
    expect(data.querySelector('.some').textContent).toContain('User');
  })
});
