import ProForm, { ProFormText } from '@ant-design/pro-form';

const CheckEvaluationForm = () => {
  return (
    <ProForm.Group title="测评指标">
      <ProFormText name="nihss" label="NIHSS评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="abcd2" label="ABCD2评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="cdr" label="CDR评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="adl" label="ADL评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="eq5D" label="EQ--5D评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="mmse" label="MMSE评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="moCA" label="MoCA评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="ds" label="数字广度（DS）评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="stroop" label="Stroop 色词评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="ctt" label="颜色数字连线(CTT)评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="vft" label="言语流畅性（VFT）评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="bnt" label="波士顿命名（BNT）评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="rey" label="复杂图形（Rey）评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText
        name="avlt"
        label="听觉词语记忆测试(AVLT)评分"
        rules={[{ max: 32 }]}
        width="xl"
      />
      <ProFormText name="hamdanxiety" label="HAMD焦虑评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="hamddepression" label="HAMD抑郁评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText
        name="oneStepExperiment"
        label="一字步实验评分"
        rules={[{ max: 32 }]}
        width="xl"
      />
      <ProFormText
        name="sixMeterWalking"
        label="6米步行测试评分"
        rules={[{ max: 32 }]}
        width="xl"
      />
      <ProFormText name="balance" label="平衡测试评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="fingers" label="对指评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="quickSitUp" label="快速起坐测试评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="constipation" label="便秘临床评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText
        name="bladderHyperactivityDisorder"
        label="膀胱过度活动症症状评分"
        rules={[{ max: 32 }]}
        width="xl"
      />
      <ProFormText name="prostate" label="国际前列腺症状评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText name="mrs" label="mRS评分" rules={[{ max: 32 }]} width="xl" />
      <ProFormText
        name="nutritionScreening"
        label="营养筛查评分"
        rules={[{ max: 32 }]}
        width="xl"
      />
      <ProFormText name="drinkingWater" label="洼田饮水实验评分" rules={[{ max: 32 }]} width="xl" />
    </ProForm.Group>
  );
};

export default CheckEvaluationForm;
