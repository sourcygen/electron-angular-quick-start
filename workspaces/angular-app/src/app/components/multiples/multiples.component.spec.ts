import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MultiplesComponent } from './multiples.component';
import { ElectronIpcService } from 'src/app/services/electron-ipc.service';
import {
	TranslateFakeLoader,
	TranslateLoader,
	TranslateModule,
	TranslateService,
} from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('MultiplesComponent', () => {
	const mockElectronIpcService = jasmine.createSpyObj(['receive', 'send']);
	let fixture: ComponentFixture<MultiplesComponent>;
	let component: MultiplesComponent;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [MultiplesComponent],
			imports: [
				ReactiveFormsModule,
				TranslateModule,
				TranslateModule.forRoot({
					loader: {
						provide: TranslateLoader,
						useClass: TranslateFakeLoader,
					},
				}),
			],
			providers: [
				TranslateService,
				{
					provide: ElectronIpcService,
					useValue: mockElectronIpcService,
				},
			],
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
