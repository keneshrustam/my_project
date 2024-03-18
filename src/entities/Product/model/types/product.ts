type TProductTitle = string;
type TProductDescription = string;
type TProductId = number;
type TProductPrice = number;
type TProductCategory = string;
type TProductImages = string[];

interface IProduct {
    title: TProductTitle;
    description: TProductDescription;
    id: TProductId;
    price: TProductPrice;
    oldPrice: TProductPrice;
    category: TProductCategory;
    images: TProductImages;
}

enum EProductViewType {
    BLOCK = "block",
    ROW = "row"
}

interface IProductSchema {
    list: {
        data: IProduct[],
        isLoading: boolean,
        error: TNullable<string>
    },
    current: {
        data: TNullable<IProduct>,
        isLoading: boolean,
        error: TNullable<string>
    },
    totalCount: number,
    page: number,
    size: number,
    viewType: EProductViewType
}

export interface IProductQueries {
    q: string
}

export type {
    IProduct,
    IProductSchema,
};

export {
    EProductViewType
};