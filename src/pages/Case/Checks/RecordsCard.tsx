import React from 'react';
import { Button, Card, Col, Empty, Row } from 'antd';
import { isEmpty } from 'lodash';

interface Item {
  id?: number;
  checkTime?: string;
  createTime?: string;
}

export interface RecordCardProps {
  data?: Item[];
  handleEditClick?: (key?: number) => void;
}

const RecordCard: React.FC<RecordCardProps> = (props) => {
  return (
    <Row gutter={[20, 10]}>
      {isEmpty(props.data) ? (
        <Empty />
      ) : (
        props.data?.map((item) => (
          <Col key={item.id}>
            <Card
              bordered
              title={`${item.checkTime}检查报告单`}
              actions={[
                <Button type="link">查看</Button>,
                <Button type="link" onClick={() => props.handleEditClick!(item?.id)}>
                  编辑
                </Button>,
              ]}
            >
              <div>创建时间： {item.createTime}</div>
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
};

export default RecordCard;
