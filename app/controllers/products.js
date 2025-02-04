const Product = require('../../modals/products')
const getproducts =  async (req,res)=>{
    
    const {company, name, sort, select} = req.query;
    const queryObj = {};
    if(company){
        queryObj.company = company;
    }
    if(name){
        queryObj.name = {$regex:name, $options:'i'};
    }
    let productData = Product.find(queryObj)
    if(sort){
        let sortFix = sort.replace(',', " ");
        productData = productData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(',').join(" ");
        productData = productData.select(selectFix);
    }
    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3
    let skip = (page-1) * limit
    productData = productData.skip(skip).limit(limit);
    
    const getProducts = await productData;
    return res.status(200).json({getProducts, nbHints: getProducts.length})
}
const productsControllersTesing =  async(req,res)=>{
    
    //const getProduct = await Product.find(req.query).sort({"name":-1});
    const getProduct = await Product.find(req.query);
    return res.status(200).json({myData:getProduct})
}
module.exports = {getproducts, productsControllersTesing};