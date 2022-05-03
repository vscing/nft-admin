import { defHttp } from '/@/utils/http/axios';

enum Api {
  getGoodsAll = '/goods/getAll',
  getGoodsList = '/goods/getList',
  addGoodsInfo = '/goods/addInfo',
  getGoodsInfo = '/goods/getInfo',
  updateGoodsInfo = '/goods/updateInfo',
  updateGoodsSort = '/goods/updateSort',
  delGoodsInfo = '/goods/delInfo',

  getGoodsSkuList = '/goodsSku/getList',
  getGoodsSkuInfo = '/goodsSku/getInfo',


  getPlayList = '/play/getList',
  addPlayInfo = '/play/addInfo',
  getPlayInfo = '/play/getInfo',
  updatePlayInfo = '/play/updateInfo',
  updatePlaySort = '/play/updateSort',
  delPlayInfo = '/play/delInfo',


  getPlayNeedList = '/playNeed/getList',
  addPlayNeedInfo = '/playNeed/addInfo',
  getPlayNeedInfo = '/playNeed/getInfo',
  updatePlayNeedInfo = '/playNeed/updateInfo',
  updatePlayNeedSort = '/playNeed/updateSort',
  delPlayNeedInfo = '/playNeed/delInfo',

  getBlindList = '/blind/getList',
  addBlindInfo = '/blind/addInfo',
  getBlindInfo = '/blind/getInfo',
  updateBlindInfo = '/blind/updateInfo',
  delBlindInfo = '/blind/delInfo',
  
}

export const getBlindList = (params: any) => defHttp.get<any>({ url: Api.getBlindList, params });
export const addBlindInfo = (params: any) => defHttp.post<any>({ url: Api.addBlindInfo, params });
export const getBlindInfo = (params: any) => defHttp.get<any>({ url: Api.getBlindInfo, params });
export const updateBlindInfo = (params: any) => defHttp.post<any>({ url: Api.updateBlindInfo, params });
export const delBlindInfo = (id: number) => defHttp.delete<any>({ url: Api.delBlindInfo, params: {id} });

export const getGoodsAll = (params: any) => defHttp.get<any>({ url: Api.getGoodsAll, params });
export const getGoodsList = (params: any) => defHttp.get<any>({ url: Api.getGoodsList, params });
export const addGoodsInfo = (params: any) => defHttp.post<any>({ url: Api.addGoodsInfo, params });
export const getGoodsInfo = (params: any) => defHttp.get<any>({ url: Api.getGoodsInfo, params });
export const updateGoodsInfo = (params: any) => defHttp.post<any>({ url: Api.updateGoodsInfo, params });
export const updateGoodsSort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updateGoodsSort, params: { id, sort }});
export const delGoodsInfo = (id: number) => defHttp.delete<any>({ url: Api.delGoodsInfo, params: {id} });

export const getGoodsSkuList = (params: any) => defHttp.get<any>({ url: Api.getGoodsSkuList, params });
export const getGoodsSkuInfo = (params: any) => defHttp.get<any>({ url: Api.getGoodsSkuInfo, params });

export const getPlayList = (params: any) => defHttp.get<any>({ url: Api.getPlayList, params });
export const addPlayInfo = (params: any) => defHttp.post<any>({ url: Api.addPlayInfo, params });
export const getPlayInfo = (params: any) => defHttp.get<any>({ url: Api.getPlayInfo, params });
export const updatePlayInfo = (params: any) => defHttp.post<any>({ url: Api.updatePlayInfo, params });
export const updatePlaySort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updatePlaySort, params: { id, sort }});
export const delPlayInfo = (id: number) => defHttp.delete<any>({ url: Api.delPlayInfo, params: {id} });

export const getPlayNeedList = (params: any) => defHttp.get<any>({ url: Api.getPlayNeedList, params });
export const addPlayNeedInfo = (params: any) => defHttp.post<any>({ url: Api.addPlayNeedInfo, params });
export const getPlayNeedInfo = (params: any) => defHttp.get<any>({ url: Api.getPlayNeedInfo, params });
export const updatePlayNeedInfo = (params: any) => defHttp.post<any>({ url: Api.updatePlayNeedInfo, params });
export const updatePlayNeedSort = (id: number, sort: number) => defHttp.post<any>({ url: Api.updatePlayNeedSort, params: { id, sort }});
export const delPlayNeedInfo = (id: number) => defHttp.delete<any>({ url: Api.delPlayNeedInfo, params: {id} });
