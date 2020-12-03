import  products from '@/api/model/products';

// 状态值
const state ={
    //订货单数据
      products: products
};

// 修改state中变量的值
const mutations ={};

// 提交的是mutation，而不是直接变更状态。可以包含任意异步操作也就
// 是请求接口之类的操作
const actions={};
// 返回操作之后的数据字段到页面
const getters ={
    getproducts(state){
        // console.log(state.products)
        return state.products
    }
};
export default{
    state,
    actions,
    mutations,
    getters
}