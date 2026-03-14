import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CharacterService } from '../../../core/services/character.service';
import { Character } from '../../../models/character';
import { ApiResponse } from '../../../models/api.response';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList implements OnInit {
  characters: Character[] = [];
  currentPage: number = 1;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private characterService: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.loading = true;
    this.error = null;
    this.characters = [];
    this.cdr.detectChanges();

    this.characterService.getCharacters(this.currentPage).subscribe({
      next: (response: ApiResponse<Character>) => {
        console.log('Respuesta API:', response);
        this.characters = response.results ?? [];
        this.loading = false;
        this.error = null;
        this.cdr.detectChanges();
      },
      error: (err: unknown) => {
        console.error('Error al cargar personajes:', err);
        this.error = 'No se pudieron cargar los personajes.';
        this.loading = false;
        this.characters = [];
        this.cdr.detectChanges();
      }
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.loadCharacters();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }
}
