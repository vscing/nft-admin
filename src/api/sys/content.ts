import { defHttp } from '/@/utils/http/axios';

enum Api {
  getCategoryList = '/category/getList',
  addCategoryInfo = '/category/addInfo',
  getCategoryInfo = '/category/getInfo',
  updateCategoryInfo = '/category/updateInfo',
  updateCategorySort = '/category/updateSort',
  delCategoryInfo = '/category/delInfo',

  getArticleList = '/article/getList',
  addArticleInfo = '/article/addInfo',
  getArticleInfo = '/article/getInfo',
  updateArticleInfo = '/article/updateInfo',
  updateArticleSort = '/article/updateSort',
  delArticleInfo = '/article/delInfo',
  
}

export const getCategoryList = (params: any) => defHttp.get<any>({ url: Api.getCategoryList, params });

export const addCategoryInfo = (params: any) => defHttp.post<any>({ url: Api.addCategoryInfo, params });

export const getCategoryInfo = (params: any) => defHttp.get<any>({ url: Api.getCategoryInfo, params });

export const updateCategoryInfo = (params: any) => defHttp.post<any>({ url: Api.updateCategoryInfo, params });

export const updateCategorySort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updateCategorySort, params: { id, sort }});

export const delCategoryInfo = (id: number) => defHttp.delete<any>({ url: Api.delCategoryInfo, params: {id} });


export const getArticleList = (params: any) => defHttp.get<any>({ url: Api.getArticleList, params });

export const addArticleInfo = (params: any) => defHttp.post<any>({ url: Api.addArticleInfo, params });

export const getArticleInfo = (params: any) => defHttp.get<any>({ url: Api.getArticleInfo, params });

export const updateArticleInfo = (params: any) => defHttp.post<any>({ url: Api.updateArticleInfo, params });

export const updateArticleSort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updateArticleSort, params: { id, sort }});

export const delArticleInfo = (id: number) => defHttp.delete<any>({ url: Api.delArticleInfo, params: {id} });

