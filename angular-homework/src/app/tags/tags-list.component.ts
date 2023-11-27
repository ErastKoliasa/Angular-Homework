import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TagService } from '../services/tag-service/tag.service';
import { Observable } from 'rxjs';
import { ITags } from './tags';

@Component({
  selector: 'app-tags-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.css'
})
export class TagsListComponent {
  public tags$: Observable<ITags[]> = this.tagsService.tags$;

  constructor(private tagsService: TagService){}

  deleteProduct(id: string) {
    this.tagsService.deleteTagById(id);
  }
}
