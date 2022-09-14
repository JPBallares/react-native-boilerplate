export const generateAvatar = (
  name: string,
  color: string,
  background: string,
): string => {
  return `https://ui-avatars.com/api/?background=${background}&color=${color}&name=${name}`;
};
