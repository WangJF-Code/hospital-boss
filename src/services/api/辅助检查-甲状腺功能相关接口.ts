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
export async function put_thyroidFunction(
  body?
  : API.DetectThyroidFunctionUpdateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/thyroidFunction`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建信息 POST  */
export async function post_thyroidFunction(
  body?
  : API.DetectThyroidFunctionCreateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/thyroidFunction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 POST  */
export async function post_thyroidFunction_list(
  params: {
    // query
    /** type */
    'type': number;
    /** dataId */
    'dataId': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_DetectThyroidFunctionDTO__>(`/api/thyroidFunction/list`, {
    method: 'POST',
    params: {
        
        ...params,},
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_thyroidFunction_$id$(
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
  return request<API.ApiResult_DetectThyroidFunctionDTO_>(`/api/thyroidFunction/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

