import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map } from 'rxjs';
import { Entry, MOCK_ENTRIES, TransientEntry } from '../models/entry';

@Injectable({
  providedIn: 'root',
})
export class EntryService {
  private entries = new BehaviorSubject<Entry[]>(MOCK_ENTRIES);

  entries$ = this.entries.pipe(
    distinctUntilChanged(),
    map((entries) =>
      entries.sort((entryA, entryB) => entryB.created - entryA.created)
    )
  );

  orphanEntries$ = this.entries$.pipe(
    map((entries) => entries.filter((e) => e.tags.length === 0))
  );

  orphanCounter$ = this.orphanEntries$.pipe(
    map((entries) => entries.length),
    distinctUntilChanged()
  );

  favoriteEntries$ = this.entries$.pipe(
    map((entries) => entries.filter((e) => e.favorite))
  );

  favoriteCounter$ = this.favoriteEntries$.pipe(
    map((entries) => entries.length),
    distinctUntilChanged()
  );

  constructor() {}

  addEntry(transientEntry: TransientEntry) {
    const id = String(new Date().getTime());
    const entry = { ...transientEntry, id, created: new Date().getTime() };
    const entries = this.entries.getValue();
    this.entries.next([...entries, entry]);
    return id;
  }

  updateEntry(updatedEntry: Entry) {
    const entry = { ...updatedEntry, updated: new Date().getTime() };
    const entries = this.entries.getValue();
    const idx = entries.findIndex((e) => e.id === entry.id);
    this.entries.next([
      ...entries.slice(0, idx),
      entry,
      ...entries.slice(idx + 1, entries.length),
    ]);
    return entry;
  }
}
