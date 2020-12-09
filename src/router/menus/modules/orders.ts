import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
  orderNo: 1,
  menu: {
    path: '/orders',
    name: t('routes.logic.orders.table.title'),
    children: [
      {
        path: 'orders_table',
        name: t('routes.logic.orders.table.title_module'),
      },
      // {
      //   path: 'treeTable',
      //   name: 'routes.demo.table.treeTable',
      // },
      // {
      //   path: 'fetchTable',
      //   name: 'routes.demo.table.fetchTable',
      // },
      // {
      //   path: 'fixedColumn',
      //   name: 'routes.demo.table.fixedColumn',
      // },
      // {
      //   path: 'customerCell',
      //   name: 'routes.demo.table.customerCell',
      // },
      // {
      //   path: 'formTable',
      //   name: 'routes.demo.table.formTable',
      // },
      // {
      //   path: 'useTable',
      //   name: 'routes.demo.table.useTable',
      // },
      // {
      //   path: 'refTable',
      //   name: 'routes.demo.table.refTable',
      // },
      // {
      //   path: 'multipleHeader',
      //   name: 'routes.demo.table.multipleHeader',
      // },
      // {
      //   path: 'mergeHeader',
      //   name: 'routes.demo.table.mergeHeader',
      // },
      // {
      //   path: 'expandTable',
      //   name: 'routes.demo.table.expandTable',
      // },
      // {
      //   path: 'fixedHeight',
      //   name: 'routes.demo.table.fixedHeight',
      // },
      // {
      //   path: 'footerTable',
      //   name: 'routes.demo.table.footerTable',
      // },
      // {
      //   path: 'editCellTable',
      //   name: 'routes.demo.table.editCellTable',
      // },
      // {
      //   path: 'editRowTable',
      //   name: 'routes.demo.table.editRowTable',
      // },
    ],
  },
};
export default menu;
