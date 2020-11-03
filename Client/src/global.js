import defaultImage from "assets/img/placeholder.jpg";
export const checkImage = (str) => {
  try {
    return require(`assets/img/artists_picxel/${str}`);
  } catch (error) {
    return defaultImage;
  }
};
