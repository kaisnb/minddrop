import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Entry, EntryFactory, TransientEntry } from '../../models/entry';
import { TagService } from '../../services/tag.service';

export interface EntryDialogData {
  entry: Entry | null;
}

@Component({
  selector: 'ms-entry-dialog',
  templateUrl: './entry-dialog.component.html',
  styleUrls: ['./entry-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryDialogComponent {
  entry: Entry | TransientEntry = this.data.entry
    ? { ...this.data.entry }
    : EntryFactory();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: EntryDialogData,
    public dialogRef: MatDialogRef<EntryDialogComponent>,
    public tagService: TagService
  ) {}
}
