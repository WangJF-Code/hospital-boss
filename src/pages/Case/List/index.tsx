import { useRef } from 'react';
import { Button, message, Modal } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Link } from 'react-router-dom';
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { post_hospitalRecords_page, put_hospitalRecords } from '@/services/api';
import { formatDate } from '@/utils/utils';
import moment from 'moment';

const { confirm } = Modal;

function showDeleteConfirm(id: string, patientId: string, callback: () => void) {
  confirm({
    title: '确定删除记录？',
    icon: <ExclamationCircleOutlined />,
    okText: '确定',
    okType: 'danger',
    cancelText: '取消',
    onOk: async () => {
      const res = await put_hospitalRecords({ id, deleted: 1, patientId });
      if (res.code === 200) {
        message.success('删除成功！');
        callback();
      }
    },
  });
}

const columns: ProColumns<API.HospitalRecordsDTO>[] = [
  {
    dataIndex: 'id',
    title: '病历编号',
    render: (t) => (
      <Link to={`/case/case/detail${t}`} key="edit">
        {t}
      </Link>
    ),
  },
  {
    dataIndex: 'patientId',
    title: '患者ID',
    render: (t) => (
      <Link to={`/patient/record/detail${t}`} key="edit">
        {t}
      </Link>
    ),
  },
  { dataIndex: 'userName', title: '姓名' },
  {
    title: '性别',
    dataIndex: 'sex',
    valueEnum: {
      0: {
        text: '女',
      },
      1: {
        text: '男',
      },
    },
  },
  {
    dataIndex: 'age',
    title: '年龄',
    search: false,
  },
  {
    title: '状态',
    dataIndex: 'status',
    valueEnum: {
      1: { text: '住院中' },
      2: { text: '已出院' },
    },
  },
  {
    title: '住院时间',
    dataIndex: 'hospitalizationTime',
    valueType: 'dateRange',
    render: (_, record) => {
      return formatDate(record.hospitalizationTime ?? '', 'YYYY-MM-DD HH:mm');
    },
  },
  {
    title: '出院时间',
    dataIndex: 'dischargeTime',
    valueType: 'dateRange',
    render: (_, record) => {
      return formatDate(record.dischargeTime ?? '', 'YYYY-MM-DD HH:mm');
    },
  },
  {
    title: '创建时间',
    key: 'createTime',
    search: false,
    render: (_, record) => {
      return formatDate(record.createTime ?? '', 'YYYY-MM-DD HH:mm');
    },
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record, _, action) => [
      <Link to={`/case/case/edit${record.id}`} key="edit">
        编辑
      </Link>,
      <Link to={`/case/case/detail/${record.patientId}/${record.id}`} key="detail">
        查看
      </Link>,
      <a
        onClick={() =>
          showDeleteConfirm(record.id ?? '', record.patientId ?? '', () => action?.reload())
        }
        key="delete"
      >
        删除
      </a>,
    ],
  },
];

export default () => {
  const actionRef = useRef<ActionType>();

  return (
    <ProTable<API.HospitalRecordsDTO>
      columns={columns}
      actionRef={actionRef}
      request={async ({ current, pageSize, hospitalizationTime, dischargeTime, ...other }) => {
        const params = { ...other } as API.HospitalRecordsConditionDTO;
        if (hospitalizationTime) {
          const [startHospitalizationTime, endHospitalizationTime] = hospitalizationTime;
          params.startHospitalizationTime = moment(startHospitalizationTime).valueOf();
          params.endHospitalizationTime = moment(endHospitalizationTime).valueOf();
        }

        if (dischargeTime) {
          const [startDischargeTime, endDischargeTime] = dischargeTime || [];
          params.startDischargeTime = moment(startDischargeTime).valueOf();
          params.endDischargeTime = moment(endDischargeTime).valueOf();
        }

        const res = await post_hospitalRecords_page(
          { pageCurrent: current ? current - 1 : 0, pageSize },
          {
            deleted: 0,
            ...params,
          },
        );
        if (res.code === 200) {
          const { data } = res;
          return { data: data.data, total: data.count, success: true };
        }
        return { data: [], total: 0, success: false };
      }}
      rowKey="id"
      search={{ labelWidth: 'auto' }}
      form={{
        // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
        syncToUrl: (values, type) => {
          if (type === 'get') {
            return {
              ...values,
              created_at: [values.startTime, values.endTime],
            };
          }
          return values;
        },
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="电子病历"
      toolBarRender={() => [
        <Button>创建高级搜索</Button>,
        <Link to="/case/case/add">
          <Button key="button" icon={<PlusOutlined />} type="primary">
            新建电子病历
          </Button>
        </Link>,
      ]}
      options={false}
    />
  );
};
