import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcNotasPage } from './calc-notas.page';

describe('CalcNotasPage', () => {
  let component: CalcNotasPage;
  let fixture: ComponentFixture<CalcNotasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcNotasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
