import { defHttp } from '/@/utils/http/axios';

enum Api {
  getUserImgList = '/userImg/getList',
}

export const getUserImgList = (params: any) => defHttp.get<any>({ url: Api.getUserImgList, params });
