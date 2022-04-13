import React, { useState, useEffect } from "react";
import { Form, Modal, Row, Col, Input, Button, Table, Select, Image } from "antd";
import { PageContainer } from '@ant-design/pro-layout';
import { fetchSort } from '@/services/sortmanager';
import { Link } from 'umi';

import "./index.less";

const { Option } = Select;
const FormItem = Form.Item;
const { Column } = Table;
const Reflectlist: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [pageNo, setPageNo] = useState(1); //页数
  const [pageSize, setPageSize] = useState(10); //每页多少条数据
  const [totalCount, setTotalCount] = useState(0); //总的数
  const [sortList, setSortList] = useState([]);//存储接口数据
  const multiple = true;
  //添加弹窗
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const data = [
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "李想",
      alipayAccount: '15534596660',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "4600",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "陈果",
      alipayAccount: '13567544321',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "2000",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "徐小杰",
      alipayAccount: '18667626352',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "",
      status: "未实名",
      state: "禁用",
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "吴超",
      alipayAccount: '13443256742',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "500",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "吴文杰",
      alipayAccount: '16543216543',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "10000",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "杜康",
      alipayAccount: '13576542389',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "",
      status: "未实名",
      state: "禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "王雄",
      alipayAccount: '13774156789',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "100",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "徐树新",
      alipayAccount: '13776542309',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "20000",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "吴磊",
      alipayAccount: '131398763456',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "7000",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "冷寒",
      alipayAccount: '13265432748',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "1000",
      status: "已实名",
      state: "未禁用"
    },
    {
      address: "0xb6a9e1be14f1215959d94cde7858db227bfe0439",
      name: "王舒",
      alipayAccount: '15897612098',
      img:'https://theoneart-wechat.oss-cn-beijing.aliyuncs.com/uniapp-small-program/7.png',
      balance: "200",
      status: "已实名",
      state: "未禁用"
    }
  ];
  const onPageChange = (pageNumber: number) => {
    setPageNo(pageNumber);
  };
  const pageSizeChange = (current: number, size: number) => {
    setPageSize(size);
  };

  useEffect(() => {
    console.log(123);
    fetchSort().then(res => {
      console.log('-----:', res);
      setSortList(res);
    }) 
  }, []);

  //添加数据
  const onSubmit = () => {}
  ///关闭弹窗
  const onCancel = () => {
    setModal(false)
    setEdit(false)
    setDel(false)
  }

  const showTotal = (total: number) => {
    return `共${total}条`;
  }

  return (
    <div className="sortManage">
      <PageContainer>
      </PageContainer>
      <Form form={form} layout="inline">
        <Row>
          <Col span={8}>
            <FormItem labelAlign={'left'} name="sortId" label="查询提现信息">
              <Input placeholder="请输入订单号" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem labelAlign={'left'} name="state" label="状态">
              <Select
                  getPopupContainer={triggerNode => triggerNode.parentElement}
                  defaultValue="全部"
              >
                  {multiple ? <Option value=''>全部</Option> : null }
                  <Option key={0} value={0}>隐藏</Option>
                  <Option key={1} value={1}>显示</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span={24}>
            <div className="btn-wrap">
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button
                style={{ marginLeft: "12px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                重置
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="sortManage-table">
        <Table
          scroll={{ x: 800 }}
          bordered
          dataSource={data}
          pagination={{
            showQuickJumper: true,
            current: pageNo,
            pageSize: pageSize,
            total: totalCount,
            showTotal: showTotal,
            onChange: onPageChange,
            onShowSizeChange: pageSizeChange,
          }}
        >
          <Column 
              title="地址" 
              dataIndex="address" 
              key="address" 
              align="center" 
              fixed={'left'}
              width={200}
          />
          <Column 
              title="用户名称" 
              dataIndex="name" 
              key="name" 
              align="center" 
          />
          <Column
              title="支付宝账号"
              dataIndex="alipayAccount"
              key="alipayAccount"
              align="center"
          />
          <Column 
              title="图像" 
              dataIndex="img" 
              key="img" 
              align="center" 
              render={(text) => {
                return (
                  text ? <Image width={60} height={60} src={text} />
                   : <Image width={60} height={60} src="error" fallback="data:image/png;base64,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" />
                );
              }}
          />
          <Column 
              title="余额" 
              dataIndex="balance" 
              key="balance" 
              align="center" 
          />
          <Column 
              title="实名状态" 
              dataIndex="status" 
              key="status" 
              align="center" 
          />
          <Column 
              title="用户状态" 
              dataIndex="state" 
              key="state" 
              align="center" 
          />
          <Column
            title="操作"
            key={"action"}
            align={"center"}
            fixed={'left'}
            width={200}
            render={(text) => {
              return (
                <div className="operation-button">
                  <div className="button">
                        <Link to="/content/contentList/addList">
                            <Button type="primary" size="small">禁用</Button>
                        </Link>
                  </div>
                  <div className="button">
                        <Link to="/content/contentList/addList?key={text.key}">
                            <Button type="primary" size="small">解除锁单</Button>
                        </Link>
                  </div>
                  <div className="button">
                        <Link to="/content/contentList/addList?key={text.key}">
                            <Button type="primary" size="small">调整金额</Button>
                        </Link>
                  </div>
                  <div className="button">
                        <Link to="/content/contentList/addList?key={text.key}">
                            <Button type="primary" size="small">调整支付宝账号</Button>
                        </Link>
                  </div>
                </div>
              );
            }}
          />
        </Table>
        {/* <Pagination
          current={pageNo}
          pageSize={pageSize}
          total={totalCount}
          showTotal={(total: number) => `共${total}条`}
          onChange={onPageChange}
          onShowSizeChange={pageSizeChange}
        /> */}
      </div>
      <div className="addModal">
        <Modal title="新增分类·" centered visible={modal} onOk={onSubmit} onCancel={onCancel}>
          <Form>
            <Row>
              <FormItem name="sortName" label="分类名称" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="paraentSort" label="父级分类" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="sortLimit" label="分类排序" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="state" label="分类状态" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="editModal">
        <Modal title="修改分类·" centered visible={edit} onOk={onSubmit} onCancel={onCancel}>
          <Form>
            <Row>
              <FormItem name="sortName" label="分类名称" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="paraentSort" label="父级分类" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="sortLimit" label="分类排序" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="state" label="分类状态" style={{ width: "100%" }}>
                <Input placeholder="请输入" />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="deleteModal">
        <Modal
            title="删除"
            visible={del}
            onOk={onSubmit}
            onCancel={onCancel}
        >
            <p>确定删除？</p>
        </Modal>
      </div>
    </div>
  );
};

export default Reflectlist;