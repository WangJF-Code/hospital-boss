import { Button, Card, Descriptions } from 'antd';
import DescriptionsItem from 'antd/lib/descriptions/Item';

const list = [{ id: '1', name: '李娟', cycle: '第3月', date: '2020-01-01' }];

const MainBoard = () => {
  return (
    <div>
      主面板
      {list.map((v) => (
        <Card title={v.name} key={v.id} extra={<Button type="ghost">创建随访档案</Button>}>
          <Descriptions>
            <DescriptionsItem label="病历ID">{v.id}</DescriptionsItem>
            <DescriptionsItem label="随访周期">{v.cycle}</DescriptionsItem>
            <DescriptionsItem label="应随访日期">{v.date}</DescriptionsItem>
          </Descriptions>
        </Card>
      ))}
    </div>
  );
};

export default MainBoard;
