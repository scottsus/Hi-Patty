import firebase from 'firebase/compat/app';

export interface IStoryBlock {
  date: string;
  point1: string;
  point2?: string;
  point3?: string;
  path: string;
}

export const docToJSON = (
  doc: firebase.firestore.DocumentData
): IStoryBlock => {
  const data = doc.data();
  const date = new Date(data.date.seconds * 1000);
  return {
    ...data,
    date: date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    path: date.toISOString().split('T')[0],
  };
};
