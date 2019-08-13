import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegistroParadaComponent } from './edit-registro-parada.component';

describe('EditRegistroParadaComponent', () => {
  let component: EditRegistroParadaComponent;
  let fixture: ComponentFixture<EditRegistroParadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRegistroParadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegistroParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
