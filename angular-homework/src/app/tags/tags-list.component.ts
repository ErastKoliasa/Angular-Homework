import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TagService } from '../services/tag-service/tag.service';
import { Observable } from 'rxjs';
import { ITags, Tags } from './tags';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tags-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.css'
})
export class TagsListComponent {
  public tags$: Observable<ITags[]> = this.tagsService.tags$;
  public newTag: ITags = new Tags("", "");

  constructor(private tagsService: TagService){}

  public addTag(): void {
    this.tagsService.addTag(this.newTag);
    alert(`Tag ${this.newTag.title} added!`);
    this.newTag = new Tags("", "");
  }

  deleteProduct(id: string) {
    this.tagsService.deleteTagById(id);
  }
}
