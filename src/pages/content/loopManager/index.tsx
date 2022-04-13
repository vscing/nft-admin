import React, { useState, useEffect } from "react";
import {
  Form,
  Modal,
  Row,
  Col,
  Input,
  Button,
  Table,
  Select,
  Image,
  message,
  Upload,
} from "antd";
import { DeleteOutlined, FormOutlined, DiffOutlined } from "@ant-design/icons";
import { PageContainer } from "@ant-design/pro-layout";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

import "./index.less";

const { Option } = Select;
const FormItem = Form.Item;
const { Column } = Table;
const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const Loopmanager: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [pageNo, setPageNo] = useState(1); //页数
  const [pageSize, setPageSize] = useState(10); //每页多少条数据
  const [totalCount, setTotalCount] = useState(2); //总的数

  //图片上传参数
  const [fileList, setFileList] = useState([]);
  const [visible, setVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const multiple = true;
  //添加弹窗
  const [modal, setModal] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [del, setDel] = useState<boolean>(false);
  const data = [
    {
      id: "1",
      name: "最新图片",
      img:
        "https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG",
      url:
        "https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG",
      sort: "999",
      state: "显示",
      created_at: "1649086458000",
    },
    {
      id: "2",
      name: "热门图片",
      img: "",
      url:
        "https://source.theone.art/watermarkResize/bcbef54acc5cd4f380d3b59b4ee1ba62/7d996956a2b7225d05c7c008c389b58e-16484387140660.75.JPG",
      sort: "888",
      state: "隐藏",
      created_at: "1649086458000",
    },
  ];

  //图片上传
  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setVisible(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  //将上传图片存起来
  const handleChange = (fileList: any) => {
    console.log("-------:", fileList);
    setFileList(fileList);
  };

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
  const onSubmit = () => {
    form.resetFields();
  };
  ///关闭弹窗
  const onCancel = () => {
    form.resetFields();
    setModal(false);
    setEdit(false);
    setDel(false);
  };

  //删除数据
  const deleteData = (id: any) => {
    setDel(true);
  };

  const showTotal = (total: number) => {
    return `共${total}条`;
  };

  //复制内容
  const copyAction = (str: string) => {
    const createInput = document.createElement("input");
    createInput.value = str;
    document.body.appendChild(createInput);
    createInput.select();
    document.execCommand("copy");
    createInput.remove();
    message.success("复制成功!");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  );

  return (
    <div className="loopManager">
      <PageContainer></PageContainer>
      <Form form={form} layout="inline">
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="name" label="banner名称">
              <Input placeholder="请输入banner名称" />
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="state" label="状态">
              <Select
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
                defaultValue="全部"
              >
                {multiple ? <Option value="">全部</Option> : null}
                <Option key={0} value={0}>
                  隐藏
                </Option>
                <Option key={1} value={1}>
                  显示
                </Option>
              </Select>
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
            showQuickJumper: true,
            current: pageNo,
            pageSize: pageSize,
            total: totalCount,
            showTotal: showTotal,
            onChange: onPageChange,
            onShowSizeChange: pageSizeChange,
          }}
        >
          <Column title="编号" dataIndex="id" key="id" align="center" />
          <Column
            title="banner名称"
            dataIndex="name"
            key="name"
            align="center"
          />
          <Column
            title="图片"
            dataIndex="img"
            key="img"
            align="center"
            render={(text) => {
              return text ? (
                <Image width={60} height={60} src={text} />
              ) : (
                <Image
                  width={60}
                  height={60}
                  src="error"
                  fallback="data:image/png;base64,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"
                />
              );
            }}
          />
          <Column
            title="图片链接"
            dataIndex="url"
            key="url"
            align="center"
            render={(text) => {
              return (
                <div className="copy">
                  <div className="copy-desc">
                    {text.substring(0, 25) + "..."}
                  </div>
                  <div
                    className="copy-button"
                    onClick={() => {
                      copyAction(text);
                    }}
                  >
                    复制
                  </div>
                </div>
              );
            }}
          />
          <Column title="排序" dataIndex="sort" key="sort" align="center" />
          <Column title="状态" dataIndex="state" key="state" align="center" />
          <Column
            title="创建时间"
            dataIndex="created_at"
            key="created_at"
            align="center"
            render={(text) => {
              return (
                <span>
                  {moment(text.created_at).format("YYYY-MM-DD HH:mm:ss")}
                </span>
              );
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
                    <DeleteOutlined
                      onClick={(text) => {
                        deleteData(text);
                      }}
                    />
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
        <Modal
          title="轮播图上传"
          centered
          visible={modal}
          onOk={onSubmit}
          onCancel={onCancel}
        >
          <Form form={form}>
            <Row>
              <FormItem
                labelAlign={"left"}
                name="name"
                label="banner名称"
                style={{ width: "100%" }}
              >
                <Input placeholder="请输入banner名称" />
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="img" label="图片">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={visible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Row>
            <Row>
              <FormItem
                labelAlign={"left"}
                name="url"
                label="图片链接"
                style={{ width: "100%" }}
              >
                <Input placeholder="请输入图片链接" />
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="sort" label="排序">
                <Select
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  defaultValue="全部"
                >
                  <Option value="">全部</Option>
                  <Option key={0} value={0}>
                    0
                  </Option>
                  <Option key={1} value={1}>
                    1
                  </Option>
                  <Option key={2} value={2}>
                    2
                  </Option>
                  <Option key={3} value={3}>
                    3
                  </Option>
                </Select>
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="state" label="状态">
                <Select
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  defaultValue="全部"
                >
                  <Option value="">全部</Option>
                  <Option key={0} value={0}>
                    隐藏
                  </Option>
                  <Option key={1} value={1}>
                    显示
                  </Option>
                </Select>
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="editModal">
        <Modal
          title="轮播图修改"
          centered
          visible={edit}
          onOk={onSubmit}
          onCancel={onCancel}
        >
          <Form form={form}>
            <Row>
              <FormItem
                labelAlign={"left"}
                name="name"
                label="banner名称"
                style={{ width: "100%" }}
              >
                <Input placeholder="请输入banner名称" />
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="img" label="图片">
                <Upload
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={visible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </FormItem>
            </Row>
            <Row>
              <FormItem
                labelAlign={"left"}
                name="url"
                label="图片链接"
                style={{ width: "100%" }}
              >
                <Input placeholder="请输入图片链接" />
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="sort" label="排序">
                <Select
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  defaultValue="全部"
                >
                  <Option value="">全部</Option>
                  <Option key={0} value={0}>
                    0
                  </Option>
                  <Option key={1} value={1}>
                    1
                  </Option>
                  <Option key={2} value={2}>
                    2
                  </Option>
                  <Option key={3} value={3}>
                    3
                  </Option>
                </Select>
              </FormItem>
            </Row>
            <Row>
              <FormItem labelAlign={"left"} name="state" label="状态">
                <Select
                  getPopupContainer={(triggerNode) => triggerNode.parentElement}
                  defaultValue="全部"
                >
                  <Option value="">全部</Option>
                  <Option key={0} value={0}>
                    隐藏
                  </Option>
                  <Option key={1} value={1}>
                    显示
                  </Option>
                </Select>
              </FormItem>
            </Row>
          </Form>
        </Modal>
      </div>
      <div className="deleteModal">
        <Modal title="删除" visible={del} onOk={onSubmit} onCancel={onCancel}>
          <p>确定删除？</p>
        </Modal>
      </div>
    </div>
  );
};

export default Loopmanager;
