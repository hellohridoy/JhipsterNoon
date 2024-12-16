import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 26074,
};

export const sampleWithPartialData: IEmployee = {
  id: 28965,
  name: 'keenly gah communicate',
  phoneNumber: 'yuck',
};

export const sampleWithFullData: IEmployee = {
  id: 11698,
  name: 'past',
  pin: 'dreamily',
  department: 'secret er',
  email: 'Tony_Steuber37@gmail.com',
  phoneNumber: 'after heighten defiantly',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
