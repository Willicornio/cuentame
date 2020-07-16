import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaescenasPage } from './listaescenas.page';

describe('ListaescenasPage', () => {
  let component: ListaescenasPage;
  let fixture: ComponentFixture<ListaescenasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaescenasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaescenasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
