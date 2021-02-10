import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginUPage } from './login-u.page';

describe('LoginUPage', () => {
  let component: LoginUPage;
  let fixture: ComponentFixture<LoginUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginUPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
