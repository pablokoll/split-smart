import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Page } from '../../../core/models/page.model';
import { StateService } from '../../../services/state/state.service';
import { capitalizeFirstCharacter } from '../../../utils/string.utils';

export const PAGES_KEY_LOCAL_STORAGE = 'pages';
@Component({
	selector: 'app-nav-bar',
	standalone: true,
	imports: [RouterLink],
	templateUrl: './nav-bar.component.html',
})
export class NavBarComponent implements OnInit {
	constructor(private stateService: StateService) {}
	ngOnInit(): void {
	}

	state = this.stateService.getState(PAGES_KEY_LOCAL_STORAGE);
	pages = Array.isArray(this.state)
		? this.state
		: [{ id: 1, name: 'home', current: true, href: '' }].map((page) => {
				return {
					...page,
					name: this.parseTitle(page.name),
				};
			});
	isMenuOpen = false;

	parseTitle(title: string): string {
		const titleParsed = capitalizeFirstCharacter(title);
		return titleParsed;
	}

	toggleMenu(): void {
		this.isMenuOpen = !this.isMenuOpen;
	}

	updateCurrentTab(tab: Page): void {
		this.pages = this.pages.map((page) => {
			if (tab.id === page.id) {
				return {
					...page,
					current: true,
				};
			}
			return {
				...page,
				current: false,
			};
		});
		this.stateService.setState(PAGES_KEY_LOCAL_STORAGE, this.pages);
	}
}
