import { defineComponent, PropType } from 'vue';
import { Dropdown, Menu, Popconfirm } from 'ant-design-vue';
import Icon from '/@/components/Icon/index';
import { DownOutlined } from '@ant-design/icons-vue';
import { ActionItem } from '/@/components/Table';
import { Button } from '/@/components/Button';
const prefixCls = 'basic-table-action';
export default defineComponent({
  name: 'TableAction',
  props: {
    actions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },
    dropDownActions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },

    moreText: {
      type: String as PropType<string>,
      default: '__Some-New-Token__',
    },
  },
  setup(props) {
    function renderButton(action: ActionItem, index: number) {
      const { disabled = false, label, icon, color = '', type = 'link', ...actionProps } = action;
      const button = (
        <Button
          type={type}
          size="small"
          disabled={disabled}
          color={color}
          {...actionProps}
          key={`${index}-${label}`}
        >
          {() => (
            <>
              {icon && <Icon icon={icon} class="mr-1" />}
              {label}
            </>
          )}
        </Button>
      );
      return button;
    }

    function renderPopConfirm(action: ActionItem, index: number) {
      const { popConfirm = null } = action;
      if (!popConfirm) {
        return renderButton(action, index);
      }
      const {
        title,
        okText = '__Some-New-Token__',
        cancelText = '__Some-New-Token__',
        confirm = () => {},
        cancel = () => {},
        icon = '',
      } = popConfirm;
      return (
        <Popconfirm
          key={`p-${index}-${title}`}
          title={title}
          onConfirm={confirm}
          onCancel={cancel}
          okText={okText}
          cancelText={cancelText}
          icon={icon}
        >
          {() => renderButton(action, index)}
        </Popconfirm>
      );
    }

    const dropdownDefaultSLot = () => (
      <Button type="link" size="small">
        {{
          default: () => (
            <>
              {props.moreText}
              <DownOutlined />
            </>
          ),
        }}
      </Button>
    );

    // __Some-New-Token__TYPE__Some-New-Token__COLOR
    return () => {
      const { dropDownActions = [], actions } = props;
      return (
        <div class={prefixCls}>
          {actions &&
            actions.map((action, index) => {
              return renderPopConfirm(action, index);
            })}
          {dropDownActions && dropDownActions.length && (
            <Dropdown overlayClassName="basic-tale-action-dropdown">
              {{
                default: dropdownDefaultSLot,
                overlay: () => {
                  return (
                    <Menu>
                      {{
                        default: () => {
                          return dropDownActions.map((action, index) => {
                            const { disabled = false } = action;
                            action.ghost = true;
                            return (
                              <Menu.Item key={`${index}`} disabled={disabled}>
                                {() => {
                                  return renderPopConfirm(action, index);
                                }}
                              </Menu.Item>
                            );
                          });
                        },
                      }}
                    </Menu>
                  );
                },
              }}
            </Dropdown>
          )}
        </div>
      );
    };
  },
});
