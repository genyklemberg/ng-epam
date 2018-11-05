enum Category {
  WEB,
  IOT,
  HW,
  VR,
}

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  inCart: boolean;
}
