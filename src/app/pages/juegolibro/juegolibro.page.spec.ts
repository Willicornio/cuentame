import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JuegolibroPage } from './juegolibro.page';

describe('JuegolibroPage', () => {
  let component: JuegolibroPage;
  let fixture: ComponentFixture<JuegolibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegolibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegolibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
