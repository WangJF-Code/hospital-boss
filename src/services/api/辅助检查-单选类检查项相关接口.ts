/* eslint-disable */

/**
 * Api Documentation
 *
 * Api Documentation
 *
 * 接口版本：1.0
 * OpenApi 3.0.3
 * 代码生成时间：
 *
 * ⚠️: 本文件是由工具自动生成，不要手动修改
 * - https://www.npmjs.com/package/swagger-codegen-ts
 * - http://172.26.1.194/dtfe/swagger-codegen-ts
 */

import { request } from 'umi';

/** 修改信息 PUT  */
export async function put_detectItem_single(
  body?
  : API.DetectItemSingleUpdateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/detectItem/single`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建信息 POST  */
export async function post_detectItem_single(
  body?
  : API.DetectItemSingleCreateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/detectItem/single`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 POST  */
export async function post_detectItem_single_list(
  params: {
    // query
    /** type */
    'type': number;
    /** dataId */
    'dataId': string;
    /** detectType */
    'detectType': number;
    }
  ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_DetectItemSingleDTO__>(`/api/detectItem/single/list`, {
    method: 'POST',
    params: {
        
        
        ...params,},
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_detectItem_single_$id$(
  params: {
    // path
    /** id */
    'id': number;
    }
  ,
  options ?: {[key: string]: any}
) {
  const { id, 
  } = params;
  return request<API.ApiResult_DetectItemSingleDTO_>(`/api/detectItem/single/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

