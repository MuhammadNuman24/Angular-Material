import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractmanagerAppComponent } from './contractmanager-app.component';

describe('ContractmanagerAppComponent', () => {
  let component: ContractmanagerAppComponent;
  let fixture: ComponentFixture<ContractmanagerAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractmanagerAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractmanagerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
