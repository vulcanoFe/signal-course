import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
	imports: [MatButtonModule],
	selector: 'app-change-detection-examples',
	styleUrl: './change-detection-examples.scss',
	templateUrl: './change-detection-examples.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionExamples {
	counter = 0;

	private cdr = inject(ChangeDetectorRef);

	constructor() {
		setInterval(() => {
			this.counter++;
			console.log('Counter:', this.counter);
		}, 1000);

		setInterval(() => {
			this.cdr.detectChanges();
		}, 5000);
	}

	emptyAction() {
		console.log("L'action non fa nulla ma angular esegue un ciclo di change detection");
	}
}
