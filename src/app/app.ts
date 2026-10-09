import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
	imports: [MatToolbarModule, MatButtonModule, MatDividerModule, MatIconModule, RouterOutlet, RouterLink],
	selector: 'app-root',
	styleUrl: './app.scss',
	templateUrl: './app.html',
})
export class App {
	protected readonly title = signal('signal-course');
}
