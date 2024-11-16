
import { createRouter, createWebHashHistory } from 'vue-router'

import MainIndex from '../views/Main_Index.vue'
import Login from '../views/Login_Many/index.vue'

import Dashboard from '../views/dashboard/index.vue'; 
import Admin from '../views/auth/admin/index.vue'; 
//以下是未使用路由即是废除方案
// import Group from '../views/auth/group/index.vue'; 
// import Staff from '../views/wzly/staff/index.vue'; 
import Order from '../views/wzly/order/index.vue'; 


const routes = [
    {
        path: '/',
        component: MainIndex,
        name: 'main',
        children: [
            {
                path: 'dashboard',
                meta: {
                    id: '1',
                    name: '控制台',
                    icon: 'Monitor',
                    path: '/dashboard',
                    describe: '数据展示'
                },
                component: Dashboard
            },
            {
                path: 'auth',
                meta: {
                    id: '2',
                    name: '权限管理',
                    icon: 'Unlock'
                },
                children: [
                    {
                        path: '',
                        alias: ['admin'],
                        meta: {
                            id: '1',
                            name: '账号管理',
                            icon: 'User',
                            path: '/auth/admin',
                            describe: '管理员可以进行设置'
                        },
                        component: Admin
                    },
                    //已废除代码

                    // {
                    //     path: 'group',
                    //     meta: {
                    //         id: '2',
                    //         name: '菜单管理',
                    //         icon: 'Setting',
                    //         path: '/auth/group',
                    //         describe: '菜单规则'
                    //     },
                    //     component: Group
                    // }
                ]
            },


            {
                path: 'wzly',
                meta: {
                    id: '3',
                    name: '全部订单',
                    icon: 'Coin'
                },
                children: [
                    //已废除代码
                    // {
                    //     path: '',
                    //     alias: ['staff'],
                    //     meta: {
                    //         id: '1',
                    //         name: '钱包',
                    //         icon: 'Checked',
                    //         path: '/wzly/staff',
                    //         describe: '可以进行修改'
                    //     },
                    //     component: Staff
                    // },
                    {
                        path: 'order',
                        meta: {
                            id: '2',
                            name: '订单管理',
                            icon: 'DocumentCopy',
                            path: '/wzly/order',
                            describe: 'C端下单后可以查看订单状态'
                        },
                        component: Order
                    }
                ]
            },

        ]
    },
   
    {
        path: '/login',
        component: Login
    }
];
const router = createRouter({
    
    routes,//数据
    history: createWebHashHistory()//模式
})

export default router