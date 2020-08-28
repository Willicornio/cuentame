import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GrupoPage } from './grupo.page';

describe('GrupoPage', () => {
  let component: GrupoPage;
  let fixture: ComponentFixture<GrupoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GrupoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
