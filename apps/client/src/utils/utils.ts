/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import axios, { type AxiosRequestConfig, type AxiosResponse, type AxiosError } from "axios";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export async function apiRequest<T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  try {
    let response: AxiosResponse;

    switch (method) {
      case "GET":
        response = await axios.get<T>(url, config);
        break;
      case "POST":
        response = await axios.post<T>(url, data, config);
        break;
      case "PUT":
        response = await axios.put<T>(url, data, config);
        break;
      case "PATCH":
        response = await axios.patch<T>(url, data, config);
        break;
      case "DELETE":
        response = await axios.delete<T>(url, config);
        break;
      default:
        throw new Error(`Unsupported HTTP method: ${method}`);
    }

    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`API ${method} request to ${url} failed:`, {
      message: axiosError.message,
      status: axiosError.response?.status,
      data: axiosError.response?.data,
    });
    throw axiosError.response?.data || axiosError.message;
  }
}
