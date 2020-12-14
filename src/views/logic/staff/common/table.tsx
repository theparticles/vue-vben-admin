import {useI18n} from "/@/hooks/web/useI18n";
import {ActionItem, FormSchema} from "/@/components/Table";
import {useMessage} from "/@/hooks/web/useMessage";
import {computed} from "vue";
import {clientStore} from "/@/store/modules/client";
import {locationStore} from "/@/store/modules/location";

const { t } = useI18n();

export const tableSettings = {
  useSearchForm: true,
  showTableSetting: true,
  rowKey: 'id',
  fetchSetting: {
    listField: 'data',
    pageField: 'page',
    sizeField: 'limit',
    totalField: 'total',
  },
  showIndexColumn: false,
  actionColumn: {
    title: t('routes.basic.actions'),
    dataIndex: 'action',
    slots: { customRender: 'action' },
    fixed: 'right',
    width: 100,
  },
};

export const createCommonActions = (id: number, edit: () => void, deleteItem: (id: number) => void, reload: () => void): ActionItem[] => {
  const {notification} = useMessage();

  return [
    {
      icon: 'ic:outline-edit',
      label: '',
      color: 'warning',
      onClick: edit,
    },
    {
      icon: 'ic:outline-delete',
      label: '',
      color: 'error',
      popConfirm: {
        title: t('routes.basic.delete_confirm'),
        confirm: async () => {
          try {
            await deleteItem(id);

            await reload();
          } catch (e) {
            if (!e.response || e.response.data || !e.response.data.message) {
              throw e;
            }

            notification.error({
              message: e.response.data.message,
            });
          }
        },
      },
    },
  ];
}

export const getClientFilterSchema = (): FormSchema => {
  const clientList = computed(() => {
    return clientStore.getListForSelectFormatted;
  });

  return {
    field: `client_id`,
    label: '',
    component: 'Select',
    defaultValue: null,
    componentProps: {
      placeholder: t('routes.logic.staff.fields.client'),
      options: clientList,
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
    colProps: {
      lg: 6,
      xl: 4,
      xxl: 4,
    },
  };
}

export const getLocationFilterSchema = (): FormSchema => {
  const locationList = computed(() => {
    return locationStore.getListForSelectFormatted;
  });

  return {
    field: `location_id`,
    label: '',
    component: 'Select',
    defaultValue: null,
    componentProps: {
      placeholder: t('routes.logic.staff.fields.location'),
      options: locationList,
      showSearch: true,
      filterOption(input: any, option: any) {
        return (
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        );
      },
    },
    colProps: {
      lg: 8,
      xl: 5,
      xxl: 5,
    },
  };
};