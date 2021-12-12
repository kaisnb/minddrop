import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MOCK_TAGS, Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  private tags = new BehaviorSubject<Tag[]>(MOCK_TAGS);

  tags$ = this.tags.asObservable();

  constructor() {}
}
