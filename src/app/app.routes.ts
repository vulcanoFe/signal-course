import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'change-detection-examples',
		loadComponent: () =>
			import('./pages/change-detection-examples/change-detection-examples')
				.then(m => m.ChangeDetectionExamples)
	},
	{
		path: '',
		loadComponent: () =>
			import('./pages/home/home')
				.then(m => m.Home)
	}
];