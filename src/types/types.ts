export type ProductCardType = {
  length: number
}

export type mockFeaturedProductType = {
  id: number,
  name: string,
  price: string,
  image: string
}

export type ModalType = {
  isModalOpen: boolean,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>; // use for updating state variable
}

// Define TypeScript type for coordinates
export type CoordinatesType = {
  lat: number;
  lng: number;
};