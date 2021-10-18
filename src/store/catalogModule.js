import axios from 'axios';
import { getDatabase, ref, onValue } from 'firebase/database';

export default {
    state: {
        catalogs: [
            {
                id: 1,
                title: 'category 1',
                url:
                    'https://www.nastol.com.ua/download.php?img=201606/1280x1024/nastol.com.ua-178781.jpg',
                products: [
                    {
                        id: 1,
                        name: 'product 1',
                        price: 10.3,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://userscontent2.emaze.com/images/3d23edfb-cee6-4b8b-a903-f14b23729a2e/760462fd8f86f009cf2041f5234c4f90.png',
                    },
                    {
                        id: 2,
                        name: 'product 2',
                        price: 20.5,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://avatars.mds.yandex.net/get-zen_doc/1780598/pub_5e8b22f10091cb76045870c6_5e8b23ee056db828ac6ae5e1/scale_1200',
                    },
                    {
                        id: 3,
                        name: 'product 3',
                        price: 20.2,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
                    },
                    {
                        id: 4,
                        name: 'product 4',
                        price: 30,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
                    },
                    {
                        id: 5,
                        name: 'product 5',
                        price: 25,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
                    },
                    {
                        id: 6,
                        name: 'product 6',
                        price: 25.5,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
                    },
                    {
                        id: 7,
                        name: 'product 7',
                        price: 7,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
                    },
                ],
            },
            {
                id: 2,
                title: 'category 2',
                url:
                    'https://www.nastol.com.ua/download.php?img=201804/1680x1050/nastol.com.ua-277496.jpg',
                products: [
                    {
                        id: 8,
                        name: 'product 1',
                        price: 15.4,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url: 'https://images.izi.ua/54918466',
                    },
                    {
                        id: 9,
                        name: 'product 2',
                        price: 11,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://avatars.mds.yandex.net/get-pdb/2500392/4b161865-13a9-4ced-bbe6-8e2af6faa23c/s1200?webp=false',
                    },
                    {
                        id: 10,
                        name: 'product 3',
                        price: 12,
                        about:
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
                        url:
                            'https://avatars.mds.yandex.net/get-zen_doc/1707183/pub_5e016cb211691d00b00e2f9e_5e016ce1ba281e00ae82cb90/scale_1200',
                    },
                ],
            },
            {
                id: 3,
                title: 'category 3',
                url:
                    'https://www.nastol.com.ua/download.php?img=201606/1680x1050/nastol.com.ua-179400.jpg',
                products: [],
            },
            {
                id: 4,
                title: 'category 4',
                url:
                    'https://www.fonstola.ru/download.php?file=201308/1600x900/fonstola.ru-108950.jpg',
                products: [],
            },
            {
                id: 5,
                title: 'category 5',
                url:
                    'https://w-dog.ru/wallpapers/9/8/549551266186127/kananaskis-alberta-kanada-nebo-oblaka-gory-les-derevya-el-priroda-zakat-ozero-vecher-kamni-otrazhenie.jpg',
                products: [],
            },
            {
                id: 6,
                title: 'category 6',
                url:
                    'https://im0-tub-ua.yandex.net/i?id=2889288bb9577adce969f1067ed7fc6a&n=13',
                products: [],
            },
            {
                id: 7,
                title: 'category 7',
                url:
                    'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
                products: [],
            },
            {
                id: 8,
                title: 'category 8',
                url:
                    'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
                products: [],
            },
            {
                id: 9,
                title: 'category 9',
                url:
                    'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
                products: [],
            },
            {
                id: 10,
                title: 'category 10',
                url:
                    'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
                products: [],
            },
        ],
        products: [],
        dialogVisible: false,
        currentPhoto: {},
        currentCategoryId: 1,
        currentProducts: [],
        currentProduct: {},
        currentProductsCategory: {
            promotionProducts: { index: [1, 6, 3], products: [] },
            topProducts: { index: [3, 4, 5], products: [] },
            bestCostProducts: { index: [8, 10, 12], products: [] },
        },
    },
    mutations: {
        setCatalogs(state) {
            var buff = [];
            const db = getDatabase();
            const dbRef = ref(db, '/catalogs');

            onValue(
                dbRef,
                (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();
                        childData.id = Number(childKey);
                        buff.push(childData);
                    });
                },
                {
                    onlyOnce: true,
                }
            );
            state.catalogs = buff;
        },
        showDialog(state) {
            state.dialogVisible = true;
        },
        hideDialog(state) {
            state.dialogVisible = false;
        },
        setCurrentPhoto(state, payload) {
            state.currentPhoto = payload;
        },
        setCurrentProducts(state, categoryId) {
            state.currentCategoryId = categoryId;
            var products = [];
            const db = getDatabase();
            const dbRef = ref(db, '/products');

            onValue(
                dbRef,
                (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();
                        if (childData.categoryId === categoryId) {
                            childData.id = Number(childKey);
                            products.push(childData);
                        }
                    });
                },
                {
                    onlyOnce: true,
                }
            );
            state.currentProducts = products;
        },
        setProducts(state) {
            var products = [];
            const db = getDatabase();
            const dbRef = ref(db, '/products');
            onValue(
                dbRef,
                (snapshot) => {
                    snapshot.forEach((childSnapshot) => {
                        const childKey = childSnapshot.key;
                        const childData = childSnapshot.val();

                        childData.id = Number(childKey);
                        products.push(childData);
                    });
                    state.loading = true;
                },
                {
                    onlyOnce: true,
                }
            );
            state.products = products;
        },
        setCurrentProduct(state, id) {
            state.currentProducts.forEach((element) => {
                if (element.id == id) {
                    state.currentProduct = element;
                }
            });
        },
        setProduct(state, id) {
            state.products.forEach((element) => {
                if (element.id == id) {
                    state.currentProduct = element;
                }
            });
        },
        setCurrentCategoryProducts(state) {
            let c1 = [],
                c2 = [],
                c3 = [];

            state.currentProductsCategory.promotionProducts.index.forEach(
                (index) => {
                    c1.push(state.products[index - 1]);
                }
            );
            state.currentProductsCategory.topProducts.index.forEach((index) => {
                c2.push(state.products[index - 1]);
            });
            state.currentProductsCategory.bestCostProducts.index.forEach(
                (index) => {
                    c3.push(state.products[index - 1]);
                }
            );
            state.currentProductsCategory.promotionProducts.products = c1;
            state.currentProductsCategory.topProducts.products = c2;
            state.currentProductsCategory.bestCostProducts.products = c3;
        },
    },
    getters: {
        getAllCatalogs(state) {
            return state.catalogs;
        },
        getDialogVisible(state) {
            return state.dialogVisible;
        },
        getCurrentPhoto(state) {
            return state.currentPhoto;
        },
        getProductsInCategory(state) {
            return state.currentProducts;
        },
        getProductById(state) {
            return state.currentProduct;
        },
        getCurrentCategoryId(state) {
            return state.currentCategoryId;
        },
        getCurrentCategoryProducts(state) {
            return state.currentProductsCategory;
        },
    },
    actions: {
        setData(context) {
            axios
                .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
                .then((response) =>
                    context.commit('setCatalogs', response.data)
                );
        },
    },
};
