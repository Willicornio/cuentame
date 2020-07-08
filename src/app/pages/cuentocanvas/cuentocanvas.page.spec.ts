import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentocanvasPage } from './cuentocanvas.page';

describe('CuentocanvasPage', () => {
  let component: CuentocanvasPage;
  let fixture: ComponentFixture<CuentocanvasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentocanvasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentocanvasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
