import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: [],
})
export class PersonajesComponent {
  // @Input()
  // personajes: Personaje[] = [];

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DBZService) {}
}
