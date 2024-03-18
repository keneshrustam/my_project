import { IProduct } from "../../../../entities/Product";

export const getProductInfoMapper = (product: TNullable<IProduct>) => {

    if (!product) {
        return [];
    }

    return [
        [
            "Цена",
            product.price
        ],
        [
            "Старая цена",
            product.oldPrice
        ],
        [
            "Категория",
            product.category
        ],
        [
            "Ватсапп/Телефон",
            "+996509503509"
        ]
    ];
};