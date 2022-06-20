import { defHttp } from '/@/utils/http/axios';

enum Api {
  getIndex = '/index/getData',
  getDay = '/index/getDay',
}

export const getIndex = (params: any) => defHttp.get<any>({ url: Api.getIndex, params });
export const getDay = (params: any) => defHttp.get<any>({ url: Api.getDay, params });
// export const setOperate = (data: any) => defHttp.post<any>({ url: Api.getIndex, data });
