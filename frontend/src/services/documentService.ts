import apiClient from './api';
import { Document } from '../types';

export const documentService = {
  upload: async (formData: FormData) => {
    const response = await apiClient.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    return response.data;
  },

  getDocuments: async (page = 1, limit = 20) => {
    const response = await apiClient.get('/documents', {
      params: { page, limit }
    });
    return response.data;
  },

  getDocumentById: async (id: string): Promise<Document> => {
    const response = await apiClient.get(`/documents/${id}`);
    return response.data;
  },

  verifyDocument: async (id: string) => {
    const response = await apiClient.post(`/documents/${id}/verify`);
    return response.data;
  },

  downloadDocument: async (id: string) => {
    const response = await apiClient.get(`/documents/${id}/download`, {
      responseType: 'blob'
    });
    return response.data;
  },

  searchDocuments: async (query: string) => {
    const response = await apiClient.get('/documents/search/query', {
      params: { q: query }
    });
    return response.data;
  }
};
