export const getCroppedImageUrl = (url: string) => {
  //   console.log("URL Org:", url);
  const target = "media/";
  //   console.log("target.length:", target.length);
  //   console.log("url.indexof(target):", url.indexOf(target));

  const index = url.indexOf(target) + target.length;

  //   console.log("url.slice(0, index):", url.slice(0, index));
  //   console.log("url.slice(index):", url.slice(index));

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
