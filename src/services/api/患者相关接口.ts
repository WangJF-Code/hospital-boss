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

/** 修改患者信息 PUT  */
export async function put_patient(
  body?
  : API.Patient,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult>(`/api/patient`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 创建患者信息 POST  */
export async function post_patient(
  body?
  : API.Patient,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_string_>(`/api/patient`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 患者列表信息 POST  */
export async function post_patient_list(
  body?
  : API.Patient,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_List_Patient__>(`/api/patient/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    data: body,
    ...(options || {}),
  });
}

/** 患者列表信息 POST  */
export async function post_patient_page(
  params: {
    // query
    /** 当前页号 */
    'pageCurrent'?: number;
    /** 每页显示条数 */
    'pageSize'?: number;
    }
  ,
  body?
  : API.Patient,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_Page_Patient__>(`/api/patient/page`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    params: {
        
        ...params,},
    data: body,
    ...(options || {}),
  });
}

/** 患者信息 GET  */
export async function get_patient_$id$(
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
  return request<API.ApiResult_Patient_>(`/api/patient/${id}`, {
    method: 'GET',
    params: {...params,},
    ...(options || {}),
  });
}

