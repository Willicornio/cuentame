import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultadosconcursoPage } from './resultadosconcurso.page';

describe('ResultadosconcursoPage', () => {
  let component: ResultadosconcursoPage;
  let fixture: ComponentFixture<ResultadosconcursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosconcursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultadosconcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
