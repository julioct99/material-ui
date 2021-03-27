export interface Note {
  title: string;
  details: string;
  category: Category;
  id: number;
}

export type Category = 'money' | 'todos' | 'reminder' | 'work' | string;
