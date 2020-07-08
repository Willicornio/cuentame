import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentofondosPage } from './cuentofondos.page';

describe('CuentofondosPage', () => {
  let component: CuentofondosPage;
  let fixture: ComponentFixture<CuentofondosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentofondosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentofondosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
