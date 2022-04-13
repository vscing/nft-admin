import React, { useState } from "react";
import { Form, Row, Col, Input, Upload, Modal, Select, Button } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { PlusOutlined } from "@ant-design/icons";
// import TinyMceEditor from '@/components/TinyMce';
// import { Editor } from '@tinymce/tinymce-react';
import "./index.less";

const { Option } = Select;
const FormItem = Form.Item;
const getBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const Editlist: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewTitle, setPreviewTitle] = useState<string>("");
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState<string>("");

  const handleCancel = () => {
    setVisible(false);
  };

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

  //获取输入的富文本
  const getContent = (content: any) => {
    console.log("content===", content);
    setContent(content);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>上传图片</div>
    </div>
  );

  return (
    <div className="addList">
      <PageContainer></PageContainer>
      <Form form={form} className="formItem">
        <Row>
          <Col span={8}>
            <FormItem
              labelAlign={"left"}
              name="title"
              label="商品名称"
              style={{ width: "100%" }}
            >
              <Input placeholder="请输入商品名称" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="img" label="商品图片">
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
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="price" label="商品预售价">
              <Input placeholder="请输入商品预售价" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem
              labelAlign={"left"}
              name="total_stock"
              label="商品预售总数"
            >
              <Input placeholder="请输入商品预售总数" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="stock" label="商品当前库存">
              <Input placeholder="请输入商品当前库存" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="images" label="商品多图">
              <Input placeholder="请输入商品多图" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="status" label="商品状态">
              <Select
                getPopupContainer={(triggerNode) => triggerNode.parentElement}
                defaultValue="全部"
              >
                <Option value="">全部</Option>
                <Option key={10} value={10}>
                  待预售
                </Option>
                <Option key={20} value={20}>
                  发行中
                </Option>
                <Option key={30} value={30}>
                  已售罄
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem
              labelAlign={"left"}
              name="presell_time"
              label="商品预售时间"
            >
              <Input placeholder="请输入商品预售时间" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem
              labelAlign={"left"}
              name="contract_address"
              label="合约地址"
            >
              <Input placeholder="请输入合约地址" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="token_id" label="认证标识">
              <Input placeholder="请输入认证标识" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem
              labelAlign={"left"}
              name="token_standard"
              label="认证标准"
            >
              <Input placeholder="请输入认证标准" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="blockchain" label="认证网络">
              <Input placeholder="请输入认证网络" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="desc" label="商品描述">
              <Input.TextArea rows={4} showCount maxLength={200} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="content" label="内容">
              {/* <TinyMceEditor 
                      content={ content } 
                      tinymceId='tinymceIdDemo'
                      getContent={(content: any) => { getContent(content) }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

              {/* <Editor
                    inline={false}
                    // selector='#tinydemo'
                    // 这里放入上面注册成功的Tiny API Key
                    apiKey=''
                    onChange={ getContent }
                    init={{
                      // selector: '#tinydemo',
                      width: '1000px',
                      height: '300px',
                      branding: false,
                      elementpath: false,
                      placeholder: '请输入内容',
                      menubar: false,
                      // 这里我只放了一些我自己使用的toolbar，其他的可以去官网自行查看
                      toolbar: ` bold italic forecolor | alignleft aligncenter alignright alignjustify |numlist bullist outdent indent`
                    }} 
                  />
                  <div dangerouslySetInnerHTML={{ __html: content }} /> */}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="created_at" label="创建时间">
              <Input placeholder="请输入创建时间" />
            </FormItem>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <div className="btn-wrap">
              <Button type="primary" htmlType="submit">
                添加
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
    </div>
  );
};

export default Editlist;
