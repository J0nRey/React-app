const BASE_URL = "https://react-7d0ce-default-rtdb.firebaseio.com/blog-12g-default-rtdb"

export default {
    async getAllProducts () {
        let result = await fetch(`${BASE_URL}/products/.json`)
//      result = await result.jason()
        return await result.json()
    },
    async getProductById( productid ){
        let result = await fetch(`${BASE_URL}/products/${productid}.json`)
        return await result.json()
    },
    async createProduct( productData ){
        let result = await fetch(`${BASE_URL}/products/.json`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( productData )
        })
            return await result.json()
    },
    async deleteProductById( productid ){
        let result = await fetch(`${BASE_URL}/products/${productid}.json`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return await result.json()
    }, 
    //    async patchProductById( que es lo que voy a parchar, ID del producto que voy a parchar ){
    async patchProductById( productData, productid ){
        let result = await fetch(`https://react-7d0ce-default-rtdb.firebaseio.com/blog-12g-default-rtdb/products/${productid}.json`,
        {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify( productData )
        })
            return await result.json()
    }
}