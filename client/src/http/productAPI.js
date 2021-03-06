import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createProduct = async (product) => {
    const {data} = await $authHost.post('api/product', product)
    return data
}

export const fetchProduct = async (typeId, page, limit= 5) => {
    const {data} = await $host.get('api/product', {params: {
            typeId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const addBasket = async (id) => {
    const {data} = await $authHost.post('api/basket', id)
    return data
}

export const fetchBasketAll = async (BasketId) => {
    const {data} = await $authHost.get('api/basket/' + BasketId)
    return data
}