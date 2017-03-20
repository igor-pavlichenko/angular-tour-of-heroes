import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css']
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	ngOnInit(): void {
		this.getHeroes();
	}

	constructor(private heroService: HeroService) {
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

}
