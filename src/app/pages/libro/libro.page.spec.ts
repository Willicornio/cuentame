import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibroPage } from './libro.page';

describe('LibroPage', () => {
  let component: LibroPage;
  let fixture: ComponentFixture<LibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
