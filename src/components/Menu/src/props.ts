import type { Menu } from '/@/router/types';
import type { PropType } from 'vue';

import { MenuModeEnum, MenuTypeEnum } from '/@/enums/menuEnum';
import { ThemeEnum } from '/@/enums/appEnum';
import { propTypes } from '/@/utils/propTypes';
export const basicProps = {
  items: {
    type: Array as PropType<Menu[]>,
    default: () => [],
  },

  collapsedShowTitle: propTypes.bool,

  inlineIndent: propTypes.number.def(20),
  mode: {
    type: String as PropType<MenuModeEnum>,
    default: MenuModeEnum.INLINE,
  },
  showLogo: propTypes.bool,
  type: {
    type: String as PropType<MenuTypeEnum>,
    default: MenuTypeEnum.MIX,
  },
  theme: propTypes.string.def(ThemeEnum.DARK),
  inlineCollapsed: propTypes.bool,

  isHorizontal: propTypes.bool,
  accordion: propTypes.bool.def(true),
  beforeClickFn: {
    type: Function as PropType<(key: string) => Promise<boolean>>,
  },
};

export const itemProps = {
  item: {
    type: Object as PropType<Menu>,
    default: {},
  },
  level: propTypes.number,
  theme: propTypes.oneOf(['dark', 'light']),
  showTitle: propTypes.bool,
  isHorizontal: propTypes.bool,
};

export const contentProps = {
  item: {
    type: Object as PropType<Menu>,
    default: null,
  },
  showTitle: propTypes.bool.def(true),
  level: propTypes.number.def(0),
  isHorizontal: propTypes.bool.def(true),
};
