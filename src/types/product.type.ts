export type ProductDataType = {
  id: string | number;
  title: string;
  description: string;
  category: string;
  stock: number;
  price: string | number;
  image: {
    thumbnail: string;
    image1: string;
    image2: string;
  };
  size: number[];
  rating: number;
  popular: boolean;
  newProduct: boolean;
  path: string;
  order: string;
};
