import {makeAutoObservable} from "mobx"

export default class ProductStore{
    constructor(){
        this._types = []
        this._sizes = [
            {id:1, name:'XS'},
            {id:2, name:'S'},
            {id:3, name:'M'},
            {id:4, name:'L'},
            {id:5, name:'XL'}
        ]
        this._product = []
        this._specialProduct = []
        this._selectedType = {}
        this._selectedSize = {}
        this._selectedProduct={}
        this._limit = 3
        this._page = 1
        this._totalCount = 0
        
        makeAutoObservable(this)
    }

    setTypes(types){
        return this._types = types 
    }

    setProduct(product){
        return this._product = product
    }

    setSelectedType(types){
       return this._selectedType = types
    }
    
    setSelectedProduct(product){
        this._selectedProduct = product
    }

    setPage(page) {
        this._page = page
    }
    
    setTotalCount(count) {
        this._totalCount = count
    }

    get selectedProduct(){
        return this._selectedProduct
    }

    get types(){
        return this._types
    }

    get product(){
        return this._product
    }

    get selectedType(){
        return this._selectedType
    }

    setProductStart(productStart){
        return this._productStart = productStart
    }

    get productStart(){
        return this._productStart
    }

    setSpecialProduct(specialProduct){
        return this._specialProduct = specialProduct
    }

    get specialProduct(){
        return this._specialProduct
    }

    setSizes(sizes){
        return this._sizes = sizes 
    }

    setSelectedSizes(sizes){
        this._selectedSizes = sizes
    }

    get selectedSizes(){
        return this._selectedSizes
    }
    
    get sizes(){
        return this._sizes
    }

    get page() {
        return this._page
    }
    
    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
    }

}