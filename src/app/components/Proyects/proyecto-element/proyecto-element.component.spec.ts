import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoElementComponent } from './proyecto-element.component';

describe('ProyectoElementComponent', () => {
  let component: ProyectoElementComponent;
  let fixture: ComponentFixture<ProyectoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
