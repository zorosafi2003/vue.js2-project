import Axios from "axios";

const baseUrl = "http://localhost:3500/";

export default {
    namespaced: true,
    state: {
        products: [],
        categoriesData: [],
        productsTotal: 0,
        currentPage: 1,
        pageSize: 4,
        currentCategory: "All"
      },
      getters: {
        productsFilteredByCategory: state => {
         return state.products.filter(
            p =>
              state.currentCategory == "All" || p.category == state.currentCategory
          );
        },
        getProducts: (state, getters) => {
          let index = (state.currentPage - 1) * state.pageSize;
          return getters.productsFilteredByCategory.slice(
            index,
            index + state.pageSize
          );
        },
        pageCount: (state, getters) =>
        Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
        getcategories: state => ["All", ...state.categoriesData]
      },
      mutations: {
        setCurrentPage(state, page) {
          state.currentPage = page;
        },
        setPageSize(state, size) {
          state.pageSize = size;
          state.currentPage = 1;
        },
        setCurrentCategory(state, category) {
          state.currentCategory = category;
          state.currentPage = 1;
        },
        setData(state, data) {
          state.products = data.productArr;
          state.productsTotal = data.productArr.length;
          state.categoriesData = data.categoryArr.sort();
        }
      },
      actions: {
        async getData(context) {
          let productArr = (await Axios.get(baseUrl + "products")).data;
          let categoryArr = (await Axios.get(baseUrl + "categories")).data;
          context.commit("setData", { productArr, categoryArr });
        }
      },
}