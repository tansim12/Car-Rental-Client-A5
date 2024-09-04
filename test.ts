interface IProductData {
  name: string;
  title: string;
  image: string[];
  ShortDescription: string;
  description: string[];
  price: number;
  discount: number;
  rating: number;
  availability: "inStock" | "pre-order" | "upcoming";
  brand: string;
  type: string;
  color: string[];
  materials: string;
  quantity: number;
  isDelete: boolean;
  specification: string;
  shoppingInfo: string;
  sellerProfile: string;
}
