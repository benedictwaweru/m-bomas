/**---------------------------------------------------------------------------------------
 * Copyright (c) 2025. All rights reserved.
 * This project is licensed under the Apache License.
 * See LICENSE file in the project root for license information.
 *-----------------------------------------------------------------------------------------*/

export class StorageService {
  private static storage: Storage;

  constructor(type: "local" | "session" = "local") {
    StorageService.storage = type === "local" ? window.localStorage : window.sessionStorage;
  }

  static set<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  static get<T>(key: string): T | null {
    const item = this.storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  static remove(key: string): void {
    this.storage.removeItem(key);
  }

  static clear(): void {
    this.storage.clear();
  }
}
