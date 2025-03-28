export const trimDescription = (description, limit = 100) => {
  if (description.length <= limit) return description;
  return description.slice(0, limit) + '...';
}