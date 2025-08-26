/*
 * @Author: 羊驼
 * @Date: 2025-08-07 11:49:40
 * @LastEditors: 羊驼
 * @LastEditTime: 2025-08-28 11:48:27
 * @Description: file content
 */
import { BrowserWindow, dialog,ipcMain,screen, shell,Notification,globalShortcut,app } from "electron"
import sequelize from "./sequelize/index"

import { ModelCtor,Model,Attributes,ModelOptions,ModelAttributes } from "./sequelize/model"
export declare global {
  /**
   * @description: 加载需要热更新的脚本
   * @param {string} path 路径 已插件根路径为准
   * @return {T} 根据脚本export 为准
   */
  declare function loadScript<T>(path: string): T

  /**
   * @description: 调试控制台输出
   * @return {*}
   */
  declare const Console = {
    log(...args: any[]): void {},
    error(...args: any[]): void {},
    warn(...args: any[]): void {},
    trace(...args: any[]): void { },
    clear(): void {}
  }

  /**
   * @description: 开放的electron权限
   */  
  declare const electron = {
    app,
    language: {
      addListener: (callback: (lang: string) => void) => void {},
      removeListener: (callback: (lang: string) => void) => void {},
      clearListener: () => void {},
      getLanguage(): string { },
    },
    database: {
    createDatabase<M extends Model, TAttributes = Attributes<M>>(
      modelName: string,
      attributes: ModelAttributes<M, TAttributes>,
      options?: ModelOptions<M>
      ): ModelCtor<M>
      {},
      checkTableExist(name: string): Promise<boolean>
      ,
      Sequelize: sequelize
    },
    dialog,
    screen,
    ipcMain: {
      on: (channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void) => void {},
      once: (channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void) => void {},
      off: (channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void) => void {},
      removeAllListeners: (channel: string) => void {},
      handle: (channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void) => void {},
      handleOnce: (channel: string, listener: (event: IpcMainEvent, ...args: any[]) => void) => void {},
      removeHandler: (channel: string) => void {},
    },
    BrowserWindow(options: BrowserWindowConstructorOptions): BrowserWindow
    ,
    Notification,
    globalShortcut,
    shell,
  }

  declare const isDev: boolean;

  /**
   * @description: 当前窗体
   */  
  declare const win: BrowserWindow;

  /**
   * @description: 当前根路径
   */  
  declare const __dirname: string;

  /**
   * @description: 当前文件名
   */  
  declare const __filename: string;

}
