import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsCatalogComponent } from './parts-catalog.component';

describe('PartsCatalogComponent', () => {
  let component: PartsCatalogComponent;
  let fixture: ComponentFixture<PartsCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartsCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
