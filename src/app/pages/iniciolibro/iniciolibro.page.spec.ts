import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciolibroPage } from './iniciolibro.page';

describe('IniciolibroPage', () => {
  let component: IniciolibroPage;
  let fixture: ComponentFixture<IniciolibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciolibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciolibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
