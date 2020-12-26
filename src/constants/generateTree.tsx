import { repeat } from 'lodash';

export const generateTree = (treeSections: number, sectionHeight: number) => {
  let tempStarArr: string[] = [];

  for (let i = 0; i < treeSections; i++) {
    for (let j = 0; j < sectionHeight; j++) {
      let stars = '*';
      let spacing = '';
      spacing += repeat(' ', sectionHeight + (treeSections - 1) - 1 - j - i);
      stars = spacing + stars;
      let starCounter = 2 * j;
      stars += repeat('*', starCounter + i * 2);
      console.log(tempStarArr);
      tempStarArr.push(stars);
    }
  }

  return tempStarArr;
};
