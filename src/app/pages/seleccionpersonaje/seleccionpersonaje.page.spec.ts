import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionpersonajePage } from './seleccionpersonaje.page';

describe('SeleccionpersonajePage', () => {
  let component: SeleccionpersonajePage;
  let fixture: ComponentFixture<SeleccionpersonajePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionpersonajePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionpersonajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
