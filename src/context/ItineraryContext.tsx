import React, { createContext, useContext, useState, useEffect } from 'react';
import { SavedItem } from '../types';

interface ItineraryContextType {
  savedItems: SavedItem[];
  saveItem: (item: Omit<SavedItem, 'addedAt'>) => void;
  removeItem: (id: string) => void;
  isItemSaved: (id: string) => boolean;
  clearAll: () => void;
}

const ItineraryContext = createContext<ItineraryContextType | undefined>(undefined);

const STORAGE_KEY = 'explore_rajasthan_saved_items_v1';

export const ItineraryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedItems));
    } catch (e) {
      console.error('Failed to save itinerary item to localStorage', e);
    }
  }, [savedItems]);

  const saveItem = (item: Omit<SavedItem, 'addedAt'>) => {
    setSavedItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, { ...item, addedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }];
    });
  };

  const removeItem = (id: string) => {
    setSavedItems((prev) => prev.filter((i) => i.id !== id));
  };

  const isItemSaved = (id: string) => {
    return savedItems.some((i) => i.id === id);
  };

  const clearAll = () => {
    setSavedItems([]);
  };

  return (
    <ItineraryContext.Provider value={{ savedItems, saveItem, removeItem, isItemSaved, clearAll }}>
      {children}
    </ItineraryContext.Provider>
  );
};

export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error('useItinerary must be used within an ItineraryProvider');
  }
  return context;
};
