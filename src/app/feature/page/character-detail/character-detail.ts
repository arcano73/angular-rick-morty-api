import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CharacterService } from '../../../core/services/character.service';
import { Character } from '../../../models/character';

@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.css'
})
export class CharacterDetail implements OnInit {
  character: Character | null = null;
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: CharacterService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.error = 'ID de personaje no válido.';
      this.loading = false;
      this.cdr.detectChanges();
      return;
    }

    this.loadCharacter(id);
  }

  loadCharacter(id: number): void {
    this.loading = true;
    this.error = null;
    this.character = null;
    this.cdr.detectChanges();

    this.service.getCharacterById(id).subscribe({
      next: (response: Character) => {
        this.character = response;
        this.loading = false;
        this.error = null;
        this.cdr.detectChanges();
      },
      error: (err: unknown) => {
        console.error('Error al cargar personaje:', err);
        this.error = 'No se pudo cargar el detalle del personaje.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
