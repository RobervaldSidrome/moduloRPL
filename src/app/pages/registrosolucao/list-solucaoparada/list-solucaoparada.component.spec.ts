import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolucaoparadaComponent } from './list-solucaoparada.component';

describe('ListSolucaoparadaComponent', () => {
  let component: ListSolucaoparadaComponent;
  let fixture: ComponentFixture<ListSolucaoparadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSolucaoparadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSolucaoparadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
