export const addToDownloads = (item) => {
  console.log('adding download:', item);
  return {
      type: 'add',
      item
  };
}