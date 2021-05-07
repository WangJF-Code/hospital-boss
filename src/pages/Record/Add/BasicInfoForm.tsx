import { Fragment } from 'react';
import ProForm, {
  ProFormText,
  ProFormSelect,
  ProFormDigit,
  ProFormRadio,
} from '@ant-design/pro-form';
import { Cascader, Form } from 'antd';
import city from '@/assets/json/city';
import { idPattern, phonePattern } from '@/utils/pattern';
import { jobOptions, sexOptions } from '@/utils/options';

const liveStatus = { 1: '单独居住', 2: '与子女同住', 3: '与配偶同住' };
const maritalStatus = { 1: '已婚', 2: '未婚', 3: '丧偶', 4: '离异' };
const degree = {
  1: '小学及以下',
  2: '初中',
  3: '中专/高中',
  4: '大专/大本',
  5: '硕士及以上',
};
const medicalType = {
  1: '城镇职工基本医疗保险',
  2: '新城镇居民基本医疗保险',
  3: '新型农村合作医疗',
  4: '贫困救助',
  5: '商业医疗保险',
  6: '全公费',
  7: '全自费',
};

const cost = {
  1: '<500 元',
  2: '500~1000 元',
  3: '1001~3000 元',
  4: '3001~5000 元',
  5: '>5000 元',
};

export interface BasicInfoFormProps {
  readonly?: boolean;
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = ({ readonly }) => {
  return (
    <Fragment>
      <ProFormText
        name="userName"
        label="姓名"
        placeholder="请输入名称"
        rules={[{ required: true }, { max: 20 }]}
        readonly={readonly}
      />
      <ProFormSelect
        name="sex"
        label="性别"
        valueEnum={sexOptions}
        rules={[{ required: true }]}
        readonly={readonly}
      />

      <ProFormText
        name="idcard"
        label="身份证号"
        placeholder="请输入身份证号"
        rules={[
          { required: true },
          { len: 18 },
          { pattern: idPattern, message: '不符合身份证格式' },
        ]}
        readonly={readonly}
      />

      <ProFormDigit
        name="age"
        label="年龄"
        placeholder="请输入年龄"
        readonly={readonly}
        min={1}
        fieldProps={{ precision: 0 }}
      />

      <ProFormText
        name="phoneNumber"
        label="手机号"
        placeholder="请输入手机号"
        rules={[{ pattern: phonePattern, message: '请输入11位手机号' }]}
        readonly={readonly}
      />
      <ProForm.Group>
        <ProFormRadio.Group
          readonly={readonly}
          name="nation"
          label="民族"
          options={[
            { label: '汉族', value: 0 },
            { label: '少数民族', value: 1 },
          ]}
          width="md"
          initialValue={0}
        />
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, curValues) => prevValues.nation !== curValues.nation}
        >
          {({ getFieldValue }) => {
            return getFieldValue('nation') === 1 ? (
              <ProFormText name="nationTitle" placeholder="请输入民族" readonly={readonly} />
            ) : null;
          }}
        </Form.Item>
      </ProForm.Group>
      {readonly ? (
        <ProFormText name="city" label="城市" readonly={readonly} />
      ) : (
        <Form.Item name="city" label="城市">
          <Cascader options={city} />
        </Form.Item>
      )}

      <ProFormText
        name="address"
        label="具体地址"
        placeholder="请输入具体地址"
        readonly={readonly}
      />

      <ProFormSelect
        name="livingStatus"
        label="居住情况"
        valueEnum={liveStatus}
        readonly={readonly}
      />
      <ProFormSelect
        name="maritalStatus"
        label="婚姻情况"
        valueEnum={maritalStatus}
        readonly={readonly}
      />
      <ProFormSelect
        name="educationDegree"
        label="文化程度"
        valueEnum={degree}
        readonly={readonly}
      />
      <ProFormSelect
        name="medicalInsuranceType"
        label="医保类型"
        valueEnum={medicalType}
        readonly={readonly}
      />
      <ProFormSelect name="job" label="职业" valueEnum={jobOptions} readonly={readonly} />
      <ProFormSelect name="income" label="月收入" valueEnum={cost} readonly={readonly} />
    </Fragment>
  );
};

export default BasicInfoForm;
