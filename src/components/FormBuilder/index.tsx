import { Component } from 'react';
import type {
  DatePickerProps,
  InputNumberProps,
  InputProps,
  RadioGroupProps,
  RadioProps,
  SwitchProps,
  ColProps,
} from 'antd';
import { Col, Form, Row } from 'antd';
import type { FormItemProps } from 'antd/lib/form';
import type { TextAreaProps } from 'antd/lib/input';
import type { FormLabelAlign } from 'antd/lib/form/interface';

const FormItem = Form.Item;

const defaultFormItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

function pickProps(source: IElement, props: string[]) {
  const target = {};
  props.forEach((prop) => {
    if (prop in source) target[prop] = source[prop];
  });
  return target;
}

class FormBuilder extends Component<FormBuilderProps> {
  renderElement = (element: IElement) => {
    const { meta } = this.props;

    const formItemProps = {
      name: element.name,
      colon: meta.colon,
      labelAlign: meta.labelAlign,
      ...(meta.formItemLayout ?? (element.label ? defaultFormItemLayout : null)),
      label: element.label,
      ...pickProps(element, [
        'name',
        'dependencies',
        'hidden',
        'htmlFor',
        'initialValue',
        'help',
        'extra',
        'labelCol',
        'wrapperCol',
        'colon',
        'hasFeedback',
        'validateStatus',
        'required',
        'rules',
        'noStyle',
        'trigger',
        'shouldUpdate',
        'validateFirst',
        'validateTrigger',
        'valuePropName',
      ]),
      ...element.formItemProps,
    };

    // 自定义元素，不适用widget 属性进行渲染
    if (element.custome) {
      return (
        <FormItem key={element?.key ?? element.name} {...formItemProps}>
          {element.children ?? null}
        </FormItem>
      );
    }

    const wp = element.widgetProps ?? {};
    const widgetProps = {
      ...pickProps(element, ['placeholder', 'type', 'className', 'style', 'onChange']),
      ...wp,
      disabled: element.disabled ?? wp.disabled ?? this.props?.disabled,
    };

    return (
      <FormItem {...formItemProps} key={element?.key ?? element.name}>
        <element.widget {...widgetProps}>{element.children ?? null}</element.widget>
      </FormItem>
    );
  };

  renderLayout = (elements: JSX.Element[]) => {
    const { meta } = this.props;

    const columns = meta.columns ?? 1;
    if (columns === 1) return elements;

    const gutter = meta.gutter ?? 0;
    const rows = [];
    const colspan = 24 / columns;

    for (let i = 0; i < elements.length; i += columns) {
      const cols = [];
      for (let j = 0; j < columns; j += 1) {
        cols.push(
          <Col key={`${i}${j}`} span={colspan}>
            {elements[i + j]}
          </Col>,
        );
      }
      rows.push(
        <Row key={i} gutter={gutter} style={{ width: '100%' }}>
          {cols}
        </Row>,
      );
    }
    return rows;
  };

  render() {
    const { meta } = this.props;
    return this.renderLayout(meta.elements.map((v, k) => this.renderElement({ ...v, key: k })));
  }
}

type WidgetProps =
  | InputProps
  | InputNumberProps
  | TextAreaProps
  | DatePickerProps
  | RadioGroupProps
  | RadioProps
  | SwitchProps;

interface IElement extends FormItemProps {
  key?: string | number;
  name?: string;
  disabled?: boolean;
  custome?: boolean;
  hidden?: boolean;
  widget?: any;
  widgetProps?: WidgetProps;
  formItemProps?: FormItemProps;
  placeholder?: string;
}

export interface IMeta {
  columns?: number;
  gutter?: number;
  colon?: false;
  elements: IElement[];
  labelAlign?: FormLabelAlign;
  formItemLayout?: {
    labelCol?: ColProps;
    wrapperCol?: ColProps;
  };
}

export interface FormBuilderProps {
  meta: IMeta;
  disabled?: boolean;
}

export default FormBuilder;
