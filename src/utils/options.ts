export const jobOptions = {
  1: '专业技术人员',
  2: '农民',
  3: '工人',
  4: '职员',
  5: '退（离）休人员',
  6: '学生',
  7: '个人经营',
  8: '自由职业者',
  9: '国家公务员',
  10: '其他',
};

export const sexOptions = { 0: '男', 1: '女' };

export const leftAndRight = [
  { label: '右手', value: 1 },
  { label: '左手', value: 2 },
  { label: '双手', value: 3 },
];

export const urinaryIncontinence = [
  { label: '否', value: 1 },
  { label: '是', value: 2 },
  { label: '不详', value: 3 },
];

/** 抗血小板 */
export const antiplateletDrugType = [
  { value: 0, label: '阿司匹林' },
  { value: 1, label: '西洛他唑' },
  { value: 2, label: '氯吡格雷' },
  { value: 3, label: '替格瑞洛' },
  { value: 4, label: '双嘧达莫' },
];

/** 抗凝 */
export const anticoagulantDrugType = [
  { value: 0, label: '华法林' },
  { value: 1, label: '达比加群' },
  { value: 2, label: '利伐沙班' },
];

export const isOrNot = [
  { value: 0, label: '否' },
  { value: 1, label: '是' },
];

export const lipidRegulatorDrugType = [
  { value: 0, label: '阿托伐他汀' },
  { value: 1, label: '瑞舒伐他汀' },
  { value: 2, label: '辛伐他汀' },
  { value: 3, label: '普伐他汀' },
  { value: 4, label: '依折麦布' },
  { value: 5, label: '普罗布考' },
];

export const isOrNotGive = [
  { value: 0, label: '未给予' },
  { value: 1, label: '已给予' },
];

export const checkResultType = [
  { label: '正常', value: 1 },
  { label: '异常，无临床意义', value: 2 },
  { label: '异常，有临床意义', value: 3 },
];

export const toastType = [
  { value: 1, label: '大动脉粥样硬化型' },
  { value: 2, label: '小动脉病变型' },
  { value: 3, label: '心源性' },
  { value: 4, label: '其他原因' },
  { value: 5, label: '原因不明' },
];

export const diagnoseType = [
  { value: 'cerebralInfarction', label: '脑梗死' },
  { value: 'cerebralCerebrovascularDisease', label: '脑出血' },
  { value: 'vascularCognitiveImpairment', label: '血管性认知障碍' },
  { value: 'hyperuricAcidemia', label: '颅内动脉狭窄' },
  { value: 'cervicalArteryStenosis', label: '颈动脉狭窄' },
  { value: 'vascularCognitiveImpairment', label: '椎动脉狭窄' },
  { value: 'coronaryHeartDisease', label: '冠心病' },
  { value: 'angina', label: '房颤' },
  { value: 'hypertension', label: '高血压' },
  { value: 'diabetes', label: '糖尿病' },
  { value: 'hyperlipidemia', label: '高脂血症' },
  { value: 'homocysteineemia', label: '同型半胱氨酸血症' },
  { value: 'hyperuricAcidemia', label: '高尿酸血症' },
  { value: 'chronicObstructivePulmonaryDisease', label: '慢性阻塞性肺疾病' },
];

export const bloodEventType = [
  { label: '进展性脑梗死', value: 1 },
  { label: '再发脑梗死', value: 2 },
  { label: '脑出血', value: 3 },
  { label: '蛛网膜下腔出血', value: 4 },
  { label: '梗死后出血转化', value: 5 },
  { label: '心绞痛', value: 6 },
  { label: '心肌梗死', value: 7 },
  { label: '周围动脉事件', value: 8 },
  { label: '下肢深静脉事件', value: 9 },
  { label: '肺部感染', value: 10 },
  { label: '泌尿系感染', value: 11 },
  { label: '应激性溃疡', value: 12 },
  { label: '压疮', value: 13 },
];

export const drugType = [
  { label: '抗血小板', value: 1 },
  { label: '抗凝', value: '2' },
  { label: '降脂', value: '3' },
  { label: '降压', value: '4' },
  { label: '降糖', value: '5' },
  { label: '促进侧支循环建立', value: '6' },
  { label: '扩张冠脉', value: '7' },
  { label: '降纤', value: '8' },
  { label: '抑酸', value: '9' },
];

export const finalDiagnoseType = [
  { label: '脑梗死', value: 1 },
  { label: '脑出血', value: 2 },
  { label: '血管性认知障碍', value: 3 },
  { label: '脑小血管病', value: 4 },
  { label: '颅内动脉狭窄', value: 5 },
  { label: '颈动脉狭窄', value: 6 },
  { label: '椎动脉狭窄', value: 7 },
  { label: '冠心病', value: 8 },
  { label: '房颤', value: 9 },
  { label: '高血压', value: 10 },
  { label: '糖尿病', value: 11 },
  { label: '高脂血症', value: 12 },
  { label: '同型半胱氨酸血症', value: 13 },
  { label: '高尿酸血症', value: 14 },
  { label: '慢性阻塞性肺疾病', value: 15 },
];

export const checkType = [
  { label: '颈部血管彩超检查', value: 401 },
  { label: '颅脑核磁共振(MRI)', value: 301 },
  { label: '磁共振血管成像(MRA)', value: 403 },
  { label: '磁共振弥散成像（DWI）', value: 404 },
  { label: 'CT 血管造影(CTA)', value: 405 },
  { label: 'CT灌注成像（CTP）', value: 406 },
];
