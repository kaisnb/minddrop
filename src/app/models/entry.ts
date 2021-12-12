export interface Entry {
  id: string;
  content: string;
  tags: string[];
  favorite: boolean;
  created: number;
  updated?: number;
  persisted: boolean;
  archived: boolean;
}

// During creation, not even stored in the client cache yet.
// ID will be generated on the client and swapped out on the server.
export type TransientEntry = Omit<Entry, 'id' | 'created'> & {
  id?: never;
  created?: never;
  persisted: false;
};

// Stored in the client cache but not persisted into the DB
export type IntermediateEntry = Entry & { persisted: false };

// Persisted on the Backend
export type PersistedEntry = Entry & { persisted: true };

export const EntryFactory = (): TransientEntry => ({
  content: '',
  tags: [],
  favorite: false,
  persisted: false,
  archived: false,
});

export const MOCK_ENTRIES: Entry[] = [
  {
    id: '1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget justo iaculis, congue nisi vitae, euismod dui. Proin ipsum lorem, dignissim at vehicula non, varius rutrum justo. Nulla molestie ultrices erat, non accumsan nisl vestibulum et. Cras maximus, lorem sed mattis varius, ligula nisl pretium felis, ut viverra arcu nisi vel felis.',
    tags: [],
    favorite: false,
    created: 1638922050310,
    persisted: true,
    archived: false,
  },
  {
    id: '2',
    content:
      'Ut interdum felis vitae dapibus mattis. Maecenas congue tristique leo id viverra. Aenean ornare cursus sem, a malesuada erat dignissim eu.',
    tags: [],
    favorite: false,
    created: 1638922050310,
    persisted: true,
    archived: false,
  },
  {
    id: '3',
    content:
      'Etiam a scelerisque felis. Proin porttitor ipsum ante, non varius libero tempor vitae. Suspendisse potenti. Ut a tempor ligula. Sed fermentum nibh porttitor justo semper, ac egestas massa aliquam. Integer ornare eros mauris. Sed sed nunc in ipsum dignissim ultricies a non nulla. Curabitur libero dolor, semper et orci vel, viverra convallis ipsum. Duis gravida neque ut augue sollicitudin, vel tincidunt nisi lacinia.',
    tags: [],
    favorite: false,
    created: 1638922050310,
    persisted: true,
    archived: false,
  },
  {
    id: '4',
    content: 'Etiam nec mauris vel est pharetra placerat quis et nisi.',
    tags: ['1', '4'],
    favorite: false,
    created: 1638922050310,
    persisted: true,
    archived: false,
  },
  {
    id: '5',
    content:
      'Nullam pulvinar nunc turpis, quis pharetra nibh placerat ac. Ut bibendum, lacus malesuada varius iaculis, eros lacus lacinia magna, ut blandit dolor dolor eu ligula. Nam sed sollicitudin est, ut commodo lectus. Maecenas et odio ac lectus placerat pharetra vitae vitae diam. Suspendisse nec posuere purus. Sed sit amet efficitur tellus, eget ornare nunc. Morbi mattis purus vitae nulla blandit pulvinar. Suspendisse ac ipsum malesuada, tincidunt arcu in, rutrum metus. Donec eget sagittis diam. Phasellus nulla lectus, pharetra vitae hendrerit nec, cursus et lectus. Nulla sem turpis, sodales eget bibendum ut, fermentum vitae diam. Nunc vitae tortor vestibulum, laoreet sapien vestibulum, varius mi. Donec sit amet est ac risus sodales varius id in ligula. Duis consequat velit sed sapien elementum, sed fringilla risus gravida.',
    tags: ['2'],
    favorite: false,
    created: 1638922050310,
    persisted: true,
    archived: false,
  },
];
