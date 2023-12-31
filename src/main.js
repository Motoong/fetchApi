import ProductOptions from "./ProductOptions.js";
import { request } from "./api.js";

const dummyData = [
    {
        optionId: 1,
        optionName: "더미 데이터다!",
        optionPrice: 10000,
        stock: 10
    },
    {
        optionId: 2,
        optionName: "더미 데이터다! 2",
        optionPrice: 15000,
        stock: 10
    },
    {
        optionId: 3,
        optionName: "더미 데이터다! 3",
        optionPrice: 10000,
        stock: 0
    },
];


const $target = document.querySelector("#app")

const DEFAULT_PRODUCT_ID = 1

const fetchOptionData = (productId) => {
    return request(`/products/${productId}`)
        .then(product => {
            console.log(product)
        })
}

fetchOptionData(DEFAULT_PRODUCT_ID)
new ProductOptions({
    $target,
    initialState: dummyData,
    onSelect: (option) => {
        alert(option.optionName)
    }    
})

