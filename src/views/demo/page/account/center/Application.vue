<template>
  <List :class="prefixCls">
    <a-row :gutter="16">
      <template v-for="(item, index) in list" :key="index">
        <a-col :span="6">
          <ListItem>
            <Card :hoverable="true" :class="`${prefixCls}__card`">
              <div :class="`${prefixCls}__card-title`">
                <Icon class="icon" v-if="item.icon" :icon="item.icon" :color="item.color" />
                {{ item.title }}
              </div>
              <div :class="`${prefixCls}__card-num`">
                __Some-New-Token__：<span>{{ item.active }}</span> __Some-New-Token__
              </div>
              <div :class="`${prefixCls}__card-num`">
                __Some-New-Token__：<span>{{ item.new }}</span>
              </div>
              <Icon
                :class="`${prefixCls}__card-download`"
                v-if="item.download"
                :icon="item.download"
              />
            </Card>
          </ListItem>
        </a-col>
      </template>
    </a-row>
  </List>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { List, Card } from 'ant-design-vue';
  import Icon from '/@/components/Icon/index';
  import { applicationList } from './data';

  export default defineComponent({
    components: {
      List,
      ListItem: List.Item,
      Card,
      Icon,
    },
    setup() {
      return {
        prefixCls: 'account-center-application',
        list: applicationList,
      };
    },
  });
</script>
<style lang="less">
  .account-center-application {
    &__card {
      width: 100%;
      margin-bottom: -12px;

      .ant-card-body {
        padding: 16px;
      }

      &-title {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);

        .icon {
          margin-top: -5px;
          font-size: 22px;
        }
      }

      &-num {
        margin-left: 24px;
        line-height: 36px;
        color: #7d7a7a;

        span {
          margin-left: 5px;
          font-size: 18px;
          color: #000;
        }
      }

      &-download {
        float: right;
        font-size: 20px !important;
        color: #1890ff;
      }
    }
  }
</style>
