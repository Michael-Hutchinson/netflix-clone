import { create } from 'zustand';

export interface ModalState {
  movieId?: string;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useModal = create<ModalState>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movieId) => set({ movieId, isOpen: true }),
  closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useModal;
