import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEdificioComponent } from './formulario-edificio.component';

describe('FormularioEdificioComponent', () => {
  let component: FormularioEdificioComponent;
  let fixture: ComponentFixture<FormularioEdificioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEdificioComponent]
    });
    fixture = TestBed.createComponent(FormularioEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
