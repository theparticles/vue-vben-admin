import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import { ContentEnum, PermissionModeEnum, ThemeEnum, RouterTransitionEnum } from '/@/enums/appEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import type { LocaleType } from '/@/locales/types';

export interface MenuSetting {
  bgColor: string;
  fixed: boolean;
  collapsed: boolean;
  canDrag: boolean;
  show: boolean;
  hidden: boolean;
  split: boolean;
  menuWidth: number;
  mode: MenuModeEnum;
  type: MenuTypeEnum;
  theme: ThemeEnum;
  topMenuAlign: 'start' | 'center' | 'end';
  trigger: TriggerEnum;
  accordion: boolean;
  closeMixSidebarOnChange: boolean;
  collapsedShowTitle: boolean;
  mixSideTrigger: MixSidebarTriggerEnum;
  mixSideFixed: boolean;
}

export interface MultiTabsSetting {
  // __Some-New-Token__
  show: boolean;
  // __Some-New-Token__
  showQuick: boolean;
  canDrag: boolean;

  // 显示刷新按钮
  showRedo: boolean;

  // 显示折叠按钮
  showFold: boolean;
}

export interface HeaderSetting {
  bgColor: string;
  fixed: boolean;
  show: boolean;
  theme: ThemeEnum;

  // 显示全屏按钮
  showFullScreen: boolean;
  // __Some-New-Token__
  useLockPage: boolean;
  // __Some-New-Token__
  showDoc: boolean;
  // 显示消息中心按钮
  showNotice: boolean;

  showSearch: boolean;
}

export interface LocaleSetting {
  show: boolean;
  // Current language
  lang: LocaleType;
  // default language
  fallback: LocaleType;
  // available Locales
  availableLocales: LocaleType[];
}

export interface TransitionSetting {
  //  Whether to open the page switching animation
  enable: boolean;

  // Route basic switching animation
  basicTransition: RouterTransitionEnum;

  // Whether to open page switching loading
  openPageLoading: boolean;

  // Whether to open the top progress bar
  openNProgress: boolean;
}

export interface ProjectConfig {
  locale: LocaleSetting;

  permissionCacheType: CacheTypeEnum;

  // 是否显示配置按钮
  showSettingButton: boolean;
  // __Some-New-Token__
  permissionMode: PermissionModeEnum;
  // __Some-New-Token__，__Some-New-Token__
  grayMode: boolean;
  // __Some-New-Token__
  colorWeak: boolean;
  // __Some-New-Token__
  themeColor: string;
  // __Some-New-Token__,__Some-New-Token__,__Some-New-Token__
  fullContent: boolean;
  // __Some-New-Token__
  contentMode: ContentEnum;
  // __Some-New-Token__logo
  showLogo: boolean;
  showFooter: boolean;
  headerSetting: HeaderSetting;
  // __Some-New-Token__
  // menuType: MenuTypeEnum;
  menuSetting: MenuSetting;

  // 多标签页设置
  multiTabsSetting: MultiTabsSetting;

  transitionSetting: TransitionSetting;

  // pageLayout是否开启keep-alive
  openKeepAlive: boolean;

  //
  // 锁屏时间
  lockTime: number;
  // __Some-New-Token__
  showBreadCrumb: boolean;
  // __Some-New-Token__
  showBreadCrumbIcon: boolean;
  // __Some-New-Token__error-handler-plugin
  useErrorHandle: boolean;
  // 是否开启回到顶部
  useOpenBackTop: boolean;
  // 是否可以嵌入iframe页面
  canEmbedIFramePage: boolean;
  // __Some-New-Token__message__Some-New-Token__notify
  closeMessageOnSwitch: boolean;
  // __Some-New-Token__http__Some-New-Token__。
  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // __Some-New-Token__
  title: string;
  // __Some-New-Token__
  apiUrl: string;
  uploadUrl?: string;
  urlPrefix?: string;
  shortName: string;
  telegramCallback: string;
  telegramBotName: string;
}

export interface GlobEnvConfig {
  // __Some-New-Token__
  VITE_GLOB_APP_TITLE: string;
  // __Some-New-Token__
  VITE_GLOB_API_URL: string;
  VITE_GLOB_API_URL_PREFIX?: string;
  VITE_GLOB_APP_SHORT_NAME: string;
  VITE_GLOB_UPLOAD_URL?: string;
  VITE_GLOB_AUTH_BOT: string;
  VITE_GLOB_AUTH_CALLBACK: string;
}

interface GlobWrap {
  globSetting: Readonly<GlobConfig>;
}

interface ProjectSettingWrap {
  projectSetting: Readonly<ProjectConfig>;
}
