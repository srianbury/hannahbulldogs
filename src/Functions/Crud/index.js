import difference from '../Diff';

function diffPost(cur, next) {
  const updatedFields = difference(next, cur);

  // if the images array has updated send the entire list
  if ('images' in updatedFields) {
    updatedFields.images = next.images;
  }

  return updatedFields;
}

export { diffPost };
