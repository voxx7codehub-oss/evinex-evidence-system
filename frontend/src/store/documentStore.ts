import create from 'zustand';
import { Document, DocumentStatus } from '../types';

interface DocumentStore {
  documents: Document[];
  loading: boolean;
  error: string | null;
  setDocuments: (documents: Document[]) => void;
  addDocument: (document: Document) => void;
  updateDocumentStatus: (id: string, status: DocumentStatus) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useDocumentStore = create<DocumentStore>((set) => ({
  documents: [],
  loading: false,
  error: null,
  
  setDocuments: (documents) => set({ documents }),
  addDocument: (document) => set((state) => ({
    documents: [document, ...state.documents]
  })),
  updateDocumentStatus: (id, status) => set((state) => ({
    documents: state.documents.map((doc) =>
      doc.id === id ? { ...doc, status } : doc
    )
  })),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
}));
