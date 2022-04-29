import { defHttp } from '/@/utils/http/axios';

enum Api {
  getIndex = '/index/getData',
}

export const getIndex = (params: any) => defHttp.get<any>({ url: Api.getIndex, params });
// export const setOperate = (data: any) => defHttp.post<any>({ url: Api.getIndex, data });
