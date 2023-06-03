import noImage from "../assets/no-image.webp";

export const getCroppedImageUrl = (url: string) => {
  // IN CASE THRE IS NO IMAGE FOUND
  if (!url) return noImage;

  const target = "media/";

  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
