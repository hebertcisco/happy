import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      path: `${process.env.DEF_URI}/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
