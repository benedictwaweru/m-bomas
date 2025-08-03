/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from "@tanstack/react-query";
import { type AxiosRequestConfig } from "axios";
import { apiRequest, type HttpMethod } from "@/utils/utils";

export function useApiQuery<T>(
  queryKey: string[],
  url: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T>({
    queryKey,
    queryFn: () => apiRequest<T>("GET", url, undefined, config),
    ...options,
  });
}

export function useApiMutation<T, TVariables = unknown>(
  method: HttpMethod,
  url: string,
  options?: UseMutationOptions<T, Error, TVariables>
) {
  return useMutation<T, Error, TVariables>({
    mutationFn: (data: TVariables) => apiRequest<T>(method, url, data),
    ...options,
  });
}
