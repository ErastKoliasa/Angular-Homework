import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ITags, Tags } from '../tags';
import { TagService } from '../../services/tag-service/tag.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tag-edit-form',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './tag-edit-form.component.html',
  styleUrl: './tag-edit-form.component.css'
})
export class TagEditFormComponent implements OnInit{
  public selectedTag: ITags | undefined;

  constructor(private tagsService: TagService, private router: Router, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedTag = this.tagsService.getTagById(params['id']);
    })
  }

  public editTag() {
    if (this.selectedTag) {
      this.tagsService.editTag(this.selectedTag);
      this.navigateToTagsList();
    }
  }

  public navigateToTagsList(): void {
    this.router.navigate(['/tags']);
  }
}
