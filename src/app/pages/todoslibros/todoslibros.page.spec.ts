import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TodoslibrosPage } from './todoslibros.page';

describe('TodoslibrosPage', () => {
  let component: TodoslibrosPage;
  let fixture: ComponentFixture<TodoslibrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoslibrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoslibrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
