<template>
  <div class="p-4">
    <BasicTable @register="registerTable" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getMultipleHeaderColumns } from './tableData';

  import { demoListApi } from '/@/api/demo/table';
  export default defineComponent({
    components: { BasicTable },
    setup() {
      const [registerTable] = useTable({
        title: '__Some-New-Token__',
        api: demoListApi,
        columns: getMultipleHeaderColumns(),
      });

      return {
        registerTable,
      };
    },
  });
</script>
