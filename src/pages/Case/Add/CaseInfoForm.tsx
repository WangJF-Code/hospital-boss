import { jobOptions, sexOptions } from '@/utils/options';
import ProForm, {
  ProFormDateTimePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-form';
import type { RequestOptionsType } from '@ant-design/pro-utils';

interface CaseInfoFormProps {
  readonly?: boolean;
  disabled?: boolean;
  handleUserNameSearch?: (key: string) => RequestOptionsType[];
  handleUserNameChange?: (key: string) => void;
  patients?: RequestOptionsType[];
}

const CaseInfoForm: React.FC<CaseInfoFormProps> = ({
  patients,
  handleUserNameSearch,
  readonly,
  disabled,
  handleUserNameChange,
}) => {
  const commonProps = { readonly, disabled };

  const disabledInput = { disabled: true };

  return (
    <>
      <ProForm.Group title="患者信息">
        {/* {readonly || disabled ? (
          <ProFormText
            name="userName"
            label="姓名"
            placeholder="请输入姓名"
            rules={[{ required: true }]}
            width="md"
            {...commonProps}
          />
        ) : (
          <ProFormSelect.SearchSelect
            name="userName"
            label="姓名"
            placeholder="请输入姓名"
            rules={[{ required: true }]}
            showSearch
            width="md"
            hasFeedback
            options={patients}
            // fieldProps={{ options: patients, loading: listLoading }}
            request={async (v) => {
              return await searchList(v.keyWords);
            }}
          />
        )} */}
        {/* <ProFormSelect */}

        <ProFormSelect
          name="userName"
          label="姓名"
          placeholder="请输入姓名"
          rules={[{ required: true }]}
          showSearch
          width="md"
          hasFeedback
          // fieldProps={{ mode: 'tags' }}
          fieldProps={{
            filterOption: () => true,
            options: patients,
            onChange: handleUserNameChange,
          }}
          request={async (key) => {
            if (key) {
              const data = await handleUserNameSearch!(key);
              return data;
            }
            return [];
          }}
        />
        {/* <FormItem label="姓名" name="userName">
          <Select
            showSearch
            onSearch={async (key) => {
              if (key) {
                const res = await handleUserNameSearch!(key);
                setData(res);
              }
            }}
            size="large"
            style={{ width: 362 }}
            onChange={handleUserNameChange}
            filterOption={false}
          >
            {data?.map((v) => (
              <Option key={v.value} value={v.value}>
                {v.label}
              </Option>
            ))}
          </Select>
        </FormItem> */}

        <ProFormText
          name="id"
          width="md"
          label="患者ID"
          rules={[{ required: true }]}
          {...commonProps}
          {...disabledInput}
        ></ProFormText>
        <ProFormDigit
          name="age"
          width="md"
          label="年龄"
          {...commonProps}
          {...disabledInput}
          rules={[{ required: true }]}
        ></ProFormDigit>
        <ProFormSelect
          name="sex"
          label="性别"
          valueEnum={sexOptions}
          rules={[{ required: true }]}
          disabled
        />
        <ProFormText
          name="phoneNumber"
          width="md"
          label="手机号"
          {...commonProps}
          rules={[{ required: true }]}
          {...disabledInput}
        ></ProFormText>
        <ProFormSelect
          valueEnum={jobOptions}
          name="job"
          width="md"
          label="职业"
          {...commonProps}
          {...disabledInput}
        ></ProFormSelect>
      </ProForm.Group>
      <ProForm.Group title="入院信息">
        <ProFormDateTimePicker name="onsetTime" label="发病时间" width="md" {...commonProps} />
        <ProFormDateTimePicker name="toHospitalTime" label="到院时间" width="md" {...commonProps} />
        <ProFormDateTimePicker
          name="hospitalizationTime"
          label="住院时间"
          width="md"
          {...commonProps}
        />
        <br />
      </ProForm.Group>
      <ProFormTextArea name="description" label="本次发病主要症状" {...commonProps} />
    </>
  );
};

export default CaseInfoForm;
