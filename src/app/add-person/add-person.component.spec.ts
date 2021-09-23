import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxInputGroupModule, IgxDatePickerModule, IgxCheckboxModule } from 'igniteui-angular';
import { AddPersonComponent } from './add-person.component';

describe('AddPersonComponent', () => {
  let component: AddPersonComponent;
  let fixture: ComponentFixture<AddPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxInputGroupModule, IgxDatePickerModule, IgxCheckboxModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
