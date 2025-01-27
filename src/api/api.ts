import { instance } from './instance';

import type { Student } from '@/types/types';

export const API = {
  getStudents: async () => {
    const { data } = await instance.get<Student[]>('/student');

    return data;
  },
};
