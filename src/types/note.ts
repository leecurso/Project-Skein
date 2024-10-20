export interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
    priority: string;
    date: string;
    createdTime: number;
    editedTime: number | null;
    isPinned: boolean;
    isRead: boolean;
  }