import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiplesComponent } from './multiples.component';

describe('MultiplesComponent', () => {
	let component: MultiplesComponent;
	let fixture: ComponentFixture<MultiplesComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [MultiplesComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MultiplesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
