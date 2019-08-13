import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSolucaoparadaComponent } from './edit-solucaoparada.component';

describe('EditSolucaoparadaComponent', () => {
  let component: EditSolucaoparadaComponent;
  let fixture: ComponentFixture<EditSolucaoparadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSolucaoparadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSolucaoparadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
