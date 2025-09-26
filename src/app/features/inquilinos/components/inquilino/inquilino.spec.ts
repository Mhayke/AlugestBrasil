import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inquilino } from './inquilino';

describe('Inquilino', () => {
  let component: Inquilino;
  let fixture: ComponentFixture<Inquilino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inquilino]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inquilino);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
