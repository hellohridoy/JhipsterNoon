import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 0,
  login: 'v@o3v8Zr\\svn',
};

export const sampleWithPartialData: IUser = {
  id: 15776,
  login: 's60',
};

export const sampleWithFullData: IUser = {
  id: 18834,
  login: 'hJ8',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
