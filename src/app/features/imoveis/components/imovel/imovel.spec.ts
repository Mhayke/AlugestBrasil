import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Imovel } from './imovel';

describe('Imovel', () => {
  let component: Imovel;
  let fixture: ComponentFixture<Imovel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Imovel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Imovel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
