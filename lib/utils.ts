import firebase from 'firebase/compat/app';

export interface IStoryBlock {
  date: string;
  point1: string;
  point2?: string;
  point3?: string;
  liked: boolean;
}

export const docToJSON = (
  doc: firebase.firestore.DocumentData
): IStoryBlock => {
  const data = doc.data();
  return {
    ...data,
    date: new Date(data.date.seconds * 1000).toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
  };
};
