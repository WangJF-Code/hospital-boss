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
export async function put_hospitalRecords(
  body?
  : API.HospitalRecordsUpdateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/hospitalRecords`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建信息 POST  */
export async function post_hospitalRecords(
  body?
  : API.HospitalRecordsCreateDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/hospitalRecords`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 列表信息 POST  */
export async function post_hospitalRecords_list(
  body?
  : API.HospitalRecordsConditionDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_HospitalRecordsDTO__>(`/api/hospitalRecords/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 分页列表信息 POST  */
export async function post_hospitalRecords_page(
  params: {
    // query
    /** 当前页号 */
    'pageCurrent'?: number;
    /** 每页显示条数 */
    'pageSize'?: number;
    }
  ,
  body?
  : API.HospitalRecordsConditionDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_Page_HospitalRecordsDTO__>(`/api/hospitalRecords/page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    params: {
        
        ...params,},
    data: body,
    ...(options || {}),
  });
}

/** 详细信息 GET  */
export async function get_hospitalRecords_$id$(
  params: {
    // path
    /** id */
    'id': string;
    }
  ,
  options ?: {[key: string]: any}
) {
  const { id, 
  } = params;
  return request<API.ApiResult_HospitalRecordsDTO_>(`/api/hospitalRecords/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

