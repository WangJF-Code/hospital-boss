import { useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Link } from 'umi';
import { post_followupRecords_page } from '@/services/api';

const columns: ProColumns<API.FollowupRecordsDTO>[] = [
  {
    title: '病历ID',
    dataIndex: 'id',
  },
  {
    title: '患者ID',
    dataIndex: 'patientId',
    render: (t) => <Link to={`/patient/record/detail${t}`}>{t}</Link>,
  },
  { title: '姓名', dataIndex: ['patient', 'userName'] },
  {
    title: '性别',
    dataIndex: ['patient', 'sex'],
    valueEnum: {
      0: {
        text: '女',
      },
      1: {
        text: '男',
      },
    },
  },
  { title: '年龄', dataIndex: ['patient', 'age'], search: false },
  { title: '随访次数', dataIndex: 'age', search: false },
  {
    title: '是否死亡',
    dataIndex: 'nation',
    valueEnum: {
      0: {
        text: '否',
      },
      1: {
        text: '是',
      },
    },
  },
  {
    title: '操作',
    valueType: 'option',
    render: (text, record) => (
      <Link to={`/patient/record/detail${record.id}`} key="detail">
        查看
      </Link>
    ),
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable<API.FollowupRecordsDTO>
      columns={columns}
      actionRef={actionRef}
      request={async ({ current, pageSize, ...other }) => {
        const res = await post_followupRecords_page(
          { pageCurrent: current ? current - 1 : 0, pageSize },
          { deleted: 0, ...other },
        );
        if (res.code === 200) {
          const { data } = res;
          return { data: data.data, total: data.count, success: true };
        }
        return { data: [], total: 0, success: false };
      }}
      editable={{
        type: 'multiple',
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      toolBarRender={() => [
        <Link to="/patient/record/add">
          <Button key="button" icon={<PlusOutlined />} type="primary">
            创建随访档案
          </Button>
        </Link>,
      ]}
    />
  );
};
