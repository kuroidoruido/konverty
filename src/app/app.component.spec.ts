import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UnitCardComponent } from './unit-card/unit-card.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnitCardComponent,
      ], imports: [ MatCardModule, MatInputModule, MatToolbarModule],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
