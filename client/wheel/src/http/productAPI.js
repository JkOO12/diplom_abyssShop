import { $server, $authServer } from "./main";

export const createType = async (type) => {
   const { data } = await $authServer.post('api/type/create', type)
   return data
}

export const fetchTypes = async (type) => {
   const { data } = await $server.get('api/type', type)
   return data
}

export const createProduct = async (product) => {
   const { data } = await $authServer.post('api/product/create', product)
   return data
}

export const fetchProduct = async (typeId, page, limit = 5) => {
   const { data } = await $server.get('api/product', {
      params: {
         typeId, page, limit
      }
   })
   return data
}

export const fetchOneProduct = async (id) => {
   const { data } = await $server.get('api/product/' + id)
   return data
}

export const fetchSpecialProducts = async () => {
   const { data } = await $server.get('api/specialProduct');
   return data
}

