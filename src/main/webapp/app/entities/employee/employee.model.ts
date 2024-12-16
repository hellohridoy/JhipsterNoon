export interface IEmployee {
  id: number;
  name?: string | null;
  pin?: string | null;
  department?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
