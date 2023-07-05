import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificiosEstructurasComponent } from './edificios-estructuras.component';

describe('EdificiosEstructurasComponent', () => {
  let component: EdificiosEstructurasComponent;
  let fixture: ComponentFixture<EdificiosEstructurasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdificiosEstructurasComponent]
    });
    fixture = TestBed.createComponent(EdificiosEstructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
