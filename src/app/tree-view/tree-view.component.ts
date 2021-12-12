import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { map, Observable, startWith, withLatestFrom } from 'rxjs';
import { Tag } from '../models/tag';
import { TagService } from '../services/tag.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Todo',
    children: [],
  },
  {
    name: 'Work',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Investing',
    children: [
      {
        name: 'Stocks',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Crypto',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'ms-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeViewComponent {
  autocompleteInput = new FormControl();
  filteredTags$: Observable<Tag[]>;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(tagService: TagService) {
    this.filteredTags$ = this.autocompleteInput.valueChanges.pipe(
      startWith(''),
      withLatestFrom(tagService.tags$),
      map(([searchStr, tags]: [string, Tag[]]) =>
        tags.filter((tag) =>
          tag.name.toLowerCase().includes(searchStr.toLowerCase())
        )
      )
    );

    this.dataSource.data = TREE_DATA;
  }

  selectTag(event: MatAutocompleteSelectedEvent) {
    console.warn(`TODO open tag: ${event.option.value}`);
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
