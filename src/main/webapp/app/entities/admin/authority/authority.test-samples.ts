import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'c0ca496a-f164-4d21-af33-0daff209d244',
};

export const sampleWithPartialData: IAuthority = {
  name: 'e83a389c-8dd4-4bff-a559-5fae0303ff86',
};

export const sampleWithFullData: IAuthority = {
  name: 'c9cbf496-3af3-4f00-a032-11b7217475e3',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
