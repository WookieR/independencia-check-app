import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SectoresComponent } from './sectores.component';

describe('SectoresComponent', () => {
  let component: SectoresComponent;
  let fixture: ComponentFixture<SectoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectoresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
