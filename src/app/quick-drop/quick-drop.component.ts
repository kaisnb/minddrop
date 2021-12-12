import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Entry, TransientEntry } from '../models/entry';
import { EntryService } from '../services/entry.service';
import {
  EntryDialogComponent,
  EntryDialogData,
} from '../shared-components/entry-dialog/entry-dialog.component';

const dialogStyles = { minHeight: '100vh', minWidth: '100%' };

@Component({
  selector: 'ms-quick-drop',
  templateUrl: './quick-drop.component.html',
  styleUrls: ['./quick-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickDropComponent {
  constructor(public dialog: MatDialog, public entryService: EntryService) {}

  openCreateDialog(): void {
    this.dialog
      .open<EntryDialogComponent, EntryDialogData, TransientEntry>(
        EntryDialogComponent,
        {
          ...dialogStyles,
          data: { entry: null },
        }
      )
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          if (result.content) {
            this.entryService.addEntry(result);
          } else {
            console.warn('Ignore entry with empty content');
          }
        } else {
          console.log('Cancelled');
        }
      });
  }

  openUpdateDialog(entry: Entry): void {
    this.dialog
      .open<EntryDialogComponent, EntryDialogData, Entry>(
        EntryDialogComponent,
        {
          ...dialogStyles,
          data: { entry },
        }
      )
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          if (result.content) {
            this.entryService.updateEntry(result);
          } else {
            console.warn('Not updateing entry with empty content');
          }
        } else {
          console.log('Cancelled');
        }
      });
  }
}
