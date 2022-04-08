import React, { useState, useEffect } from "react";
import { Form, Modal, Row, Col, Input, Button, Table, Pagination } from "antd";
import { DeleteOutlined, FormOutlined, DiffOutlined } from "@ant-design/icons";
import "./index.less";

const FormItem = Form.Item;
const { Column } = Table;
const Sortmanager: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [pageNo, setPageNo] = useState(1); //页数
  const [pageSize, setPageSize] = useState(10); //每页多少条数据
  const [totalCount, setTotalCount] = useState(54); //总的数
  //添加弹窗
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const data = [
    {
      key: "1",
      sortId: 1,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "2",
      sortId: 2,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "3",
      sortId: 3,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "4",
      sortId: 4,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "5",
      sortId: 5,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "6",
      sortId: 6,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "7",
      sortId: 7,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "8",
      sortId: 8,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "9",
      sortId: 9,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "10",
      sortId: 10,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "11",
      sortId: 11,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "12",
      sortId: 12,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "13",
      sortId: 13,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "14",
      sortId: 14,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "15",
      sortId: 15,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "16",
      sortId: 16,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "17",
      sortId: 17,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "18",
      sortId: 18,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "19",
      sortId: 19,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "20",
      sortId: 20,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "21",
      sortId: 21,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "22",
      sortId: 22,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "23",
      sortId: 23,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "24",
      sortId: 24,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "25",
      sortId: 25,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "26",
      sortId: 26,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "27",
      sortId: 27,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "28",
      sortId: 28,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "29",
      sortId: 29,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "30",
      sortId: 30,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "31",
      sortId: 31,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "32",
      sortId: 32,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "33",
      sortId: 33,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "34",
      sortId: 34,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "35",
      sortId: 35,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "36",
      sortId: 36,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "37",
      sortId: 37,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "38",
      sortId: 38,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "39",
      sortId: 39,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "40",
      sortId: 40,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "41",
      sortId: 41,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "42",
      sortId: 42,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "43",
      sortId: 43,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "44",
      sortId: 44,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "45",
      sortId: 45,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "46",
      sortId: 46,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "47",
      sortId: 47,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "48",
      sortId: 48,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "49",
      sortId: 49,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "50",
      sortId: 50,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "51",
      sortId: 51,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
    {
      key: "52",
      sortId: 52,
      sortName: "最新活动",
      status: "显示",
      sort: "999",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "53",
      sortId: 53,
      sortName: "客服帮助",
      status: "显示",
      sort: "998",
      createTime: "2022-04-04 23:34:18",
    },
    {
      key: "54",
      sortId: 54,
      sortName: "合成策略",
      status: "显示",
      sort: "997",
      createTime: "2022-04-05 14:36:28",
    },
  ];
  const onPageChange = (pageNumber: number) => {
    setPageNo(pageNumber);
  };
  const pageSizeChange = (current: number, size: number) => {
    setPageSize(size);
  };

  useEffect(() => {
    setPageNo(1);
  }, [pageSize]);

  //添加数据
  const onSubmit = () => {}
  ///关闭弹窗
  const onCancel = () => {
    setModal(false)
    setEdit(false)
    setDel(false)
  }

  return (
    <div className="sortManage">
      <Form form={form} layout="inline">
        <Row>
          <Col span={8}>
            <FormItem name="sortId" label="分类ID">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name="sortName" label="分类名称">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name="status" label="状态">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name="createTime" label="创建时间">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
        </Row>
        <Row justify="end">
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
          bordered
          dataSource={data}
          pagination={{
            current: pageNo,
            pageSize: pageSize,
            total: totalCount,
            onChange: onPageChange,
            onShowSizeChange: pageSizeChange,
          }}
        >
          <Column title="ID" dataIndex="sortId" key="sortId" align="center" />
          <Column
            title="分类名称"
            dataIndex="sortName"
            key="sortName"
            align="center"
          />
          <Column title="状态" dataIndex="status" key="status" align="center" />
          <Column title="排序" dataIndex="sort" key="sort" align="center" />
          <Column
            title="创建时间"
            dataIndex="createTime"
            key="createTime"
            align="center"
          />
          <Column
            title="操作"
            key={"action"}
            align={"center"}
            render={(text) => {
              return (
                <div className="operation-button">
                  <div className="button">
                    <DiffOutlined onClick={() => setModal(true)} />
                  </div>
                  <div className="button">
                    <DeleteOutlined onClick={() => setDel(true)} />
                  </div>
                  <div className="button">
                    <FormOutlined onClick={() => setEdit(true)} />
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
              <FormItem name="status" label="分类状态" style={{ width: "100%" }}>
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
              <FormItem name="status" label="分类状态" style={{ width: "100%" }}>
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

export default Sortmanager;