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

/** 辅助检查列表信息 POST  */
export async function post_search_auxiliaryCheck(
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
  return request<API.ApiResult_AuxiliaryCheckDTO_>(`/api/search/auxiliaryCheck`, {
    method: 'POST',
    params: {
        
        ...params,},
    ...(options || {}),
  });
}

/** 随访列表信息 POST  */
export async function post_search_followupList(
  params: {
    // query
    /** 当前页号 */
    'pageCurrent'?: number;
    /** 每页显示条数 */
    'pageSize'?: number;
    }
  ,
  body?
  : API.AdvancedSearchFollowupDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_Page_HospitalFollowupDTO__>(`/api/search/followupList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    params: {
        
        ...params,},
    data: body,
    ...(options || {}),
  });
}

/** 病历列表信息 POST  */
export async function post_search_hospitalList(
  params: {
    // query
    /** 当前页号 */
    'pageCurrent'?: number;
    /** 每页显示条数 */
    'pageSize'?: number;
    }
  ,
  body?
  : API.AdvancedSearchHospitalDTO,
  options ?: {[key: string]: any}
) {
  return request<API.ApiResult_Page_HospitalRecordsDTO__>(`/api/search/hospitalList`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',},
    params: {
        
        ...params,},
    data: body,
    ...(options || {}),
  });
}

