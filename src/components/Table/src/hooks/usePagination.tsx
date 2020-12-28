import type { PaginationProps } from '../types/pagination';
import type { BasicTableProps } from '../types/table';

import { computed, unref, ref, ComputedRef } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';

import { isBoolean } from '/@/utils/is';

import { PAGE_SIZE, PAGE_SIZE_OPTIONS } from '../const';
import { useI18n } from '/@/hooks/web/useI18n';
import {WebLocalStorage} from "/@/utils/cache";

interface ItemRender {
  page: number;
  type: 'page' | 'prev' | 'next';
  originalElement: any;
}

function itemRender({ page, type, originalElement }: ItemRender) {
  if (type === 'prev') {
    return page === 0 ? null : <LeftOutlined />;
  } else if (type === 'next') {
    return page === 1 ? null : <RightOutlined />;
  }
  return originalElement;
}

export function usePagination(refProps: ComputedRef<BasicTableProps>) {
  const configRef = ref<PaginationProps>({});

  const { t } = useI18n();
  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination } = unref(refProps);

    if (isBoolean(pagination) && !pagination) {
      return false;
    }

    let current: number = 1;

    if (pageStorageKey) {
      current = WebLocalStorage.get(pageStorageKey, 1)
    }

    return {
      current,
      pageSize: PAGE_SIZE,
      size: 'small',
      defaultPageSize: PAGE_SIZE,
      showTotal: (total) => t('component.table.total', { total }),
      showSizeChanger: true,
      pageSizeOptions: PAGE_SIZE_OPTIONS,
      itemRender: itemRender,
      showQuickJumper: true,
      ...(isBoolean(pagination) ? {} : pagination),
      ...unref(configRef),
    };
  });

  function setPagination(info: Partial<PaginationProps>) {
    const paginationInfo = unref(getPaginationInfo);
    configRef.value = {
      ...(!isBoolean(paginationInfo) ? paginationInfo : {}),
      ...info,
    };
  }

  function getPagination() {
    return unref(getPaginationInfo);
  }
  return { getPagination, getPaginationInfo, setPagination };
}
