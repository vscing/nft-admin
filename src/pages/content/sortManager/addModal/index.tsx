import React, { useState } from "react";
import {
    Form,
    Modal,
    Row,
    Col,
    Input,
    message
} from 'antd';
import "./index.less";

const FormItem = Form.Item;
const Addmodal: React.FC<any> = (props) => {

  const onSubmit = () => {}
  const onCancel = () => {
    setModals(false)
  }
  const [modals, setModals] = useState(props);

  return (
    <div className="addModal">
        <Modal
            centered
            visible={modals}
            onOk={onSubmit}
            onCancel={onCancel}
        >
            <Form>
                <Row>
                    <FormItem
                        label='分类名称'
                    >
                        <Input placeholder="请输入" />
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        label='父级分类'
                    >
                        <Input placeholder="请输入" />
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        label='分类排序'
                    >
                        <Input placeholder="请输入" />
                    </FormItem>
                </Row>
                <Row>
                    <FormItem
                        label='分类状态'
                    >
                        <Input placeholder="请输入" />
                    </FormItem>
                </Row>
            </Form>
        </Modal>
    </div>
  );
};

export default Addmodal;
