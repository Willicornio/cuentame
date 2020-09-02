import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotacionesconcursoPage } from './votacionesconcurso.page';

describe('VotacionesconcursoPage', () => {
  let component: VotacionesconcursoPage;
  let fixture: ComponentFixture<VotacionesconcursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotacionesconcursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotacionesconcursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
