import ProForm, {
  ProFormText,
  ProFormRadio,
  ProFormUploadButton,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';
import FormItem from 'antd/lib/form/FormItem';
import { sum, values } from 'lodash';
import type { Rule } from 'rc-field-form/lib/interface';

const result = [
  { label: '正常', value: 1 },
  { label: '异常，无临床意义', value: 2 },
  { label: '异常，有临床意义', value: 3 },
];

export default () => {
  const digitRules: Rule[] = [
    { required: true },
    { type: 'number', message: '只能输入数字', transform: (value) => +value },
    { type: 'number', min: 0.001, max: 10000, transform: (value) => +value },
  ];

  const resultRules: Rule[] = [{ required: true }];

  return (
    <>
      <ProForm.Group>
        <ProFormText
          name="detectOne"
          label="检测值1"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectOneOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProForm.Group>
        <ProFormText
          name="detectTwo"
          label="检测值2"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectTwoOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="detectThree"
          label="检测值3"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectThreeOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="detectFour"
          label="检测值4"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectFourOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="detectFive"
          label="检测值5"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectFiveOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="detectSix"
          label="检测值6"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectSixOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="detectSeven"
          label="检测值7"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="detectSevenOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <FormItem
          noStyle
          dependencies={['detectThree', 'detectFour', 'detectFive', 'detectSix', 'detectSeven']}
        >
          {({ getFieldsValue, setFieldsValue }) => {
            const nums = values(
              getFieldsValue([
                'detectThree',
                'detectFour',
                'detectFive',
                'detectSix',
                'detectSeven',
              ]),
            )?.map((v) => Number(v));

            setFieldsValue({ detectThreeToSeven: sum(nums) });

            return (
              <ProFormText
                name="detectThreeToSeven"
                label="检测值3-7"
                fieldProps={{ addonAfter: 'mg/dl' }}
                rules={digitRules}
                disabled
              />
            );
          }}
        </FormItem>

        <ProFormRadio.Group
          name="detectThreeToSevenOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="ldlcholesterol"
          label="低密度脂蛋白胆固醇"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="ldlcholesterolOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText
          name="totalCholesterol"
          label="总胆固醇"
          fieldProps={{ addonAfter: 'mg/dl' }}
          rules={digitRules}
        />
        <ProFormRadio.Group
          name="totalCholesterolOutcome"
          options={result}
          label="测定结果"
          rules={resultRules}
        />
      </ProForm.Group>

      <ProFormUploadButton label="上传检查照片" name="images" rules={[{ required: true }]} />
      <ProFormDateTimePicker name="checkTime" label="检查时间" rules={[{ required: true }]} />
    </>
  );
};
