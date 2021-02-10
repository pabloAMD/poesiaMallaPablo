import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroUPage } from './registro-u.page';

describe('RegistroUPage', () => {
  let component: RegistroUPage;
  let fixture: ComponentFixture<RegistroUPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
