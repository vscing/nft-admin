import { defHttp } from '/@/utils/http/axios';

enum Api {
  getGoodsList = '/goods/getList',
  addGoodsInfo = '/goods/addInfo',
  getGoodsInfo = '/goods/getInfo',
  updateGoodsInfo = '/goods/updateInfo',
  updateGoodsSort = '/goods/updateSort',
  delGoodsInfo = '/goods/delInfo',
  
}

export const getGoodsList = (params: any) => defHttp.get<any>({ url: Api.getGoodsList, params });

export const addGoodsInfo = (params: any) => defHttp.post<any>({ url: Api.addGoodsInfo, params });

export const getGoodsInfo = (params: any) => defHttp.get<any>({ url: Api.getGoodsInfo, params });

export const updateGoodsInfo = (params: any) => defHttp.post<any>({ url: Api.updateGoodsInfo, params });

export const updateGoodsSort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updateGoodsSort, params: { id, sort }});

export const delGoodsInfo = (id: number) => defHttp.delete<any>({ url: Api.delGoodsInfo, params: {id} });
