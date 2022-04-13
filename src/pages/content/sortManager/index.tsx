import React, { useState, useEffect } from "react";
import { Form, Modal, Row, Col, Input, Button, Table, Select, DatePicker } from "antd";
import { DeleteOutlined, FormOutlined, DiffOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { fetchSort, searchSort, addSort } from '@/services/sortmanager';
import "./index.less";
import moment from 'moment';

const FormItem = Form.Item;
const { Column } = Table;
const { Option } = Select;
const Sortmanager: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [pageNo, setPageNo] = useState(1); //页数
  const [pageSize, setPageSize] = useState(10); //每页多少条数据
  const [totalCount, setTotalCount] = useState(0); //总的数
  //添加弹窗
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const [sortList, setSortList] = useState([]);//存储接口数据

  const onPageChange = (pageNumber: number) => {
    setPageNo(pageNumber);
  };
  const pageSizeChange = (current: number, size: number) => {
    setPageSize(size);
  };

  useEffect(() => {
    setPageNo(1);
    fetchSort().then(res => {
      if(res.code == 0){
        setSortList(res.result.tree);
      }
    }) 
  }, []);

  //添加数据
  const onAddSubmit = (values: any) => {
    form.validateFields().then((values) => {
          let created_at = values.created_at.format('YYYY-MM-DD HH:mm:ss');
          let name = values.name;
          let sort = values.sort;
          let state = values.state;

          let param = {
            created_at,
            name,
            sort,
            state
          }
          addSort && addSort(param)
          form.resetFields();
          setModal(false);
    }).catch((errInfo) => {
          console.log('校验失败:', errInfo)
    })
  }

  //修改数据
  const onEditSubmit = () => {

  }

  //删除数据
  const onDeleSubmit = () => {

  }

  ///关闭弹窗
  const onCancel = () => {
    form.resetFields();
    setModal(false)
    setEdit(false)
    setDel(false)
  }

  //删除数据
  const deleteData = (id: any) => {
      setDel(true);
  }

  const editData = (id: any) => {
      setEdit(true)
  }

  const showTotal = (total: number) => {
    return `共${total}条`;
  }
  
  const rangePickerChange = (e: any) => { }

  //查询表单数据
  const onFinish = (values: any) => {
      form.validateFields().then((values) => {
            searchSort && searchSort(values)
      }).catch((errInfo) => {
            console.log('查询失败:', errInfo)
      })
  }

  //表单校验
  // const validator=(rule: any, value: any, $callback: any) => {
  //     if (rule.field === 'name') {
  //         if (value.length < 1)$callback('请输入订单预约时间');
  //     }
  //     $callback();
  // }

  return (
    <div className="sortManage">
      <PageContainer></PageContainer>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Row>
          <Col span={8}>
            <FormItem name="name" label="分类名称">
              <Input placeholder="请输入" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem name="state" label="状态">
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
          dataSource={sortList}
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
          <Column title="ID" dataIndex="id" key="id" align="center" />
          <Column
            title="分类名称"
            dataIndex="name"
            key="name"
            align="center"
          />
          <Column title="状态" dataIndex="state" key="state" align="center" />
          <Column title="排序" dataIndex="sort" key="sort" align="center" />
          <Column
            title="创建时间"
            dataIndex="created_at"
            key="created_at"
            align="center"
            render={(text) => {
              if(text){
                  return (
                    <span>{moment(text.created_at).format('YYYY-MM-DD HH:mm:ss')}</span>
                  );
              }
              return <div/>
            }}
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
                    <DeleteOutlined onClick={(text) => { deleteData(text) }} />
                  </div>
                  <div className="button">
                    <FormOutlined onClick={(text) => { editData(text) }} />
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
        <Modal title="新增分类" centered visible={modal} onOk={onAddSubmit} onCancel={onCancel}>
          <Form form={form}>
            <Row>
              <FormItem 
                    name="name" 
                    label="分类名称" 
                    style={{ width: "100%" }}
                    rules={
                      [
                        {
                          required:true,
                          message:'请输入分类名称'
                        }
                      ]
                    } 
              >
                <Input placeholder="请输入分类名称" />
              </FormItem>
            </Row>
            <Row>
                <Col span={8}>
                  <FormItem labelAlign={"left"} name="state" label="状态" rules={[{ required: true, message: '请选择状态!' }]}>
                          <Select defaultValue="全部">
                                <Option value=''>全部</Option>
                                <Option key={0} value={0}>0</Option>
                                <Option key={1} value={1}>1</Option>
                          </Select>
                  </FormItem>
                </Col>
            </Row>
            <Row>
              <FormItem name="sort" label="排序" style={{ width: "100%" }} rules={[{ required: true, message: '请输入排序!' }]}>
                <Input placeholder="请输入排序" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="created_at" label="创建时间" style={{ width: "100%" }} rules={[{ required: true, message: '请输入创建时间!' }]}>
                              <DatePicker
                                  format='YYYY-MM-DD HH:mm:ss'
                                  showTime={false}
                                  onChange={rangePickerChange}
                                  allowClear={false}
                              />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="editModal">
        <Modal title="修改分类" centered visible={edit} onOk={onEditSubmit} onCancel={onCancel}>
        <Form form={form}>
            <Row>
              <FormItem 
                    name="name" 
                    label="分类名称" 
                    style={{ width: "100%" }}
                    rules={
                      [
                        {
                          required:true,
                          message:'请输入分类名称'
                        }
                      ]
                    } 
              >
                <Input placeholder="请输入分类名称" />
              </FormItem>
            </Row>
            <Row>
                <Col span={8}>
                  <FormItem labelAlign={"left"} name="state" label="状态" rules={[{ required: true, message: '请选择状态!' }]}>
                          <Select defaultValue="全部">
                                <Option value=''>全部</Option>
                                <Option key={0} value={0}>0</Option>
                                <Option key={1} value={1}>1</Option>
                          </Select>
                  </FormItem>
                </Col>
            </Row>
            <Row>
              <FormItem name="sort" label="排序" style={{ width: "100%" }} rules={[{ required: true, message: '请输入排序!' }]}>
                <Input placeholder="请输入排序" />
              </FormItem>
            </Row>
            <Row>
              <FormItem name="created_at" label="创建时间" style={{ width: "100%" }} rules={[{ required: true, message: '请输入创建时间!' }]}>
                              <DatePicker
                                  format='YYYY-MM-DD HH:mm:ss'
                                  showTime={false}
                                  onChange={rangePickerChange}
                                  allowClear={false}
                              />
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="deleteModal">
        <Modal
            title="删除"
            visible={del}
            onOk={onDeleSubmit}
            onCancel={onCancel}
        >
            <p>确定删除？</p>
        </Modal>
      </div>
    </div>
  );
};

export default Sortmanager;
