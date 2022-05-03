import { defHttp } from '/@/utils/http/axios';

enum Api {
  getSellOrderList = '/order/getList?is_first=1',
  getMarketOrderList = '/order/getList?is_first=0',

  getPlayOrderList = '/orderPlay/getList',
  getApiAuthList = '/apiAuth/getList',
}

export const getSellOrderList = (params: any) => defHttp.get<any>({ url: Api.getSellOrderList, params });
export const getMarketOrderList = (params: any) => defHttp.get<any>({ url: Api.getMarketOrderList, params });

export const getPlayOrderList = (params: any) => defHttp.get<any>({ url: Api.getPlayOrderList, params });

export const getApiAuthList = (params: any) => defHttp.get<any>({ url: Api.getApiAuthList, params });

// export const getGoodsList = (params: any) => defHttp.get<any>({ url: Api.getGoodsList, params });
// export const addGoodsInfo = (params: any) => defHttp.post<any>({ url: Api.addGoodsInfo, params });
