import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
	imports: [MatCardModule, MatButtonModule, MatGridListModule, MatToolbarModule, RouterLink],
	selector: 'app-home',
	styleUrl: './home.scss',
	templateUrl: './home.html',
})
export class Home {

	esercizi = [
		{
			titolo: 'Change Detection',
			sottotitolo: 'Default vs OnPush',
			route: '/change-detection-examples'
		}
	];

}
