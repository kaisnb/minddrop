export interface Tag {
  id: string;
  name: string;
  parent?: Tag;
}

export const MOCK_TAGS: Tag[] = [
  { id: '1', name: 'Todos' },
  { id: '2', name: 'Work' },
  { id: '3', name: 'Crypto' },
  { id: '4', name: 'Stocks' },
  { id: '5', name: 'Books' },
];
