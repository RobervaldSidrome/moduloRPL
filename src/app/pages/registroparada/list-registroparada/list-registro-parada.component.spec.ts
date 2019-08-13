import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRegistroParadaComponent } from './list-registro-parada.component';

describe('ListRegistroParadaComponent', () => {
  let component: ListRegistroParadaComponent;
  let fixture: ComponentFixture<ListRegistroParadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRegistroParadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRegistroParadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
