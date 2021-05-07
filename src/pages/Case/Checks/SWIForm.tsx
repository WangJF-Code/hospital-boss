import { isOrNot } from '@/utils/options';
import {
  ProFormRadio,
  ProFormUploadButton,
  ProFormDigit,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';
import type { Rule } from 'rc-field-form/lib/interface';
import type { FormInstance } from 'antd';

export default () => {
  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProFormRadio.Group
        name="microHemorrhage"
        options={isOrNot}
        label="是否多发微出血灶"
        rules={resultRules}
      ></ProFormRadio.Group>
      <FormItem
        noStyle
        shouldUpdate={(prevValues, curValues) =>
          prevValues.microHemorrhage !== curValues.microHemorrhage
        }
      >
        {({ getFieldValue }: FormInstance) => {
          return getFieldValue('microHemorrhage') ? (
            <>
              <ProFormDigit
                name="cortex"
                label=" 皮层出血病灶数量"
                fieldProps={{ precision: 0, min: 1 }}
              />
              <ProFormDigit
                name="underCortex"
                label=" 皮层下出血病灶数量"
                fieldProps={{ precision: 0, min: 1 }}
              />
            </>
          ) : null;
        }}
      </FormItem>

      <ProFormUploadButton
        label="他汀药物基因检测照片"
        name="images"
        rules={[{ required: true }]}
      />

      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
