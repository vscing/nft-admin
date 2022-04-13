import React, { useState } from "react";
import { Form, Row, Col, Input, Upload, Modal, Select, Button } from "antd";
import { PageContainer } from "@ant-design/pro-layout";
import { PlusOutlined } from '@ant-design/icons';
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
    reader.onerror = error => reject(error);
  });
}

const Editlist: React.FC<any> = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState<boolean>(false);
  const [previewImage, setPreviewImage] = useState<string>('');
  const [previewTitle, setPreviewTitle] = useState<string>('');
  const [fileList, setFileList] = useState([]);
  const [content, setContent] = useState<string>('');

  const handleCancel = () => {
    setVisible(false)
  }

  const handlePreview = async (file: any) => {
      if(!file.url && !file.preview){
          file.preview = await getBase64(file.originFileObj);
      }
      setPreviewImage(file.url || file.preview);
      setVisible(true);
      setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  }

  //将上传图片存起来
  const handleChange = (fileList: any) => {
    console.log('-------:', fileList );
    setFileList(fileList)
  }

  //获取输入的富文本
  const getContent = (content: any) => {
    console.log('content===',content)
    setContent(content)
  }

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
            <FormItem labelAlign={"left"} name="title" label="标题">
              <Input placeholder="请输入标题" />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="desc" label="简介">
              <Input.TextArea rows={4} showCount maxLength={200} />
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
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
            <FormItem labelAlign={"left"} name="state" label="状态">
                    <Select
                          getPopupContainer={triggerNode => triggerNode.parentElement}
                          defaultValue="全部"
                      >
                          <Option value=''>全部</Option>
                          <Option key={0} value={0}>隐藏</Option>
                          <Option key={1} value={1}>显示</Option>
                    </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="sort" label="排序">
                    <Select
                          getPopupContainer={triggerNode => triggerNode.parentElement}
                          defaultValue="全部"
                      >
                          <Option value=''>全部</Option>
                          <Option key={0} value={0}>0</Option>
                          <Option key={1} value={1}>1</Option>
                          <Option key={2} value={2}>2</Option>
                          <Option key={3} value={3}>3</Option>
                    </Select>
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <FormItem labelAlign={"left"} name="author" label="作者">
              <Input placeholder="请输入作者" />
            </FormItem>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <div className="btn-wrap">
              <Button type="primary" htmlType="submit">
                修改
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