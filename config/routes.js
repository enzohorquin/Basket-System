module.exports = [
   /*  {
        path: '/auth/signup',
        entity: 'user',
        method: 'signup',
        type: 'post',
        auth: false,
        input: {
            params: {},
            body: {
                email: {
                    type: 'string',
                    required: true
                },
                adress: {
                    type: 'string',
                    required: true
                },
                password: {
                    type: 'string',
                    required: true
                }
            }
        }
    },
    {
        path: '/auth/login',
        entity: 'user',
        method: 'login',
        type: 'post',
        auth: false,
        input: {
            params: {},
            body: {
                email: {
                    type: 'string',
                    required: true
                },
                password: {
                    type: 'string',
                    required: true
                }
            }
        }
    },
    {
        path: '/auth/logout',
        entity: 'user',
        method: 'logout',
        type: 'post',
        auth: true,
        input: {
            params: {},
            body: {}
        }
    },*/
    {
        path:'/product/search_by_cat/:category_id',
        entity: 'product',
        method:'search_by_cat',
        type:'get',
        auth:true,
        input:{
            params:{
                category_id: {
                    type: 'string',
                    required:true
            }},
            body:{ }
        }
    }, 
    {
        path:'/product/search/:title',
        entity: 'product',
        method:'search',
        type:'get',
        auth:true,
        input:{
            params:{
                title:{
                    type:'string',
                    required:true
                }
            },
            body:{}
        }
    },  
    {
        path:'/product/search/:title/:category_id',
        entity: 'product',
        method:'search_both',
        type:'get',
        auth:true,
        input:{
            params:{
                title:{
                    type:'string',
                    required:true
                },
                category_id:{
                    type:'int',
                    required:true
                }
            },
            body:{}
        }
    }, 
    {
        path:'/product/all',
        entity: 'product',
        method:'all',
        type:'get',
        auth:true,
        input:{
            params:{},
            body:{}
        }
    }/* ,
    {
        path:'/cart/add',
        entity: 'cart',
        method:'add',
        type:'post',
        auth:true,
        input:{
            params:{},
            body:{
                id_user: {
                    type: 'int',
                    required:true
                },
                id_product: {
                    type:'int',
                    required:true
                }
            }
        }
    },
    {
        path:'/cart/delete',
        entity: 'cart',
        method:'delete',
        type:'post',
        auth:true,
        input:{
            params:{},
            body:{
                id_user: {
                    type: 'int',
                    required:true
                },
                id_product: {
                    type:'int',
                    required:true
                }
            }
        }
    },
    {
        path:'/order/create_order',
        entity: 'order',
        method:'create_order',
        type:'post',
        auth:true,
        input:{
            params:{},
            body:{
                id_user: {
                    type: 'int',
                    required:true
                }
            }
        }
    },
    {
        path:'/order/all',
        entity: 'order',
        method:'all',
        type:'get',
        auth:true,
        input:{
            params:{},
            body:{
                id_user: {
                    type: 'int',
                    required:true
                }
            }
        }
    } */
];