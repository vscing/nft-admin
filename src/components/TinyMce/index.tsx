import React, { useState, useEffect } from "react";
import { Button, PageHeader } from "antd";
import PropTypes from "prop-types";
// import styles from "./index.less";
import defaultplugins from "./plugins";
import defaultToolbar from "./toolbar";
import font from "./font";
import UploadImage from "./UploadImage";

const Tinymce: React.FC<any> = (props: any) => {
  const [hasChange, setHasChange] = useState<boolean>(false);
  const [hasInit, setHasInit] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  //刚才用挂载方法,二次获取不好用
  useEffect(() => {
    initTinymce();
    destroyTinymce();
  }, [])

  const propTypes = {
    tinymceId: PropTypes.string,
    content: PropTypes.string,
    toolbar: PropTypes.array,
    menubar: PropTypes.string,
    height: PropTypes.number,
    getContent: PropTypes.func,
  };

  // const defaultProps = {
  //   tinymceId:
  //     "react-tinymce-" + +new Date() + ((Math.random() * 1000).toFixed(0) + ""),
  //   menubar: "file edit insert view format table",
  //   height: 520,
  //   toolbar: [],
  // };

  const initTinymce = () => {
    const {
      tinymceId,
      menubar,
      height,
      toolbar,
      content,
      getContent,
    } = propTypes;
    window.tinymce.init({
      language: "zh_CN",
      selector: `#${tinymceId}`,
      height: height,
      body_class: "panel-body ",
      object_resizing: false,
      toolbar: toolbar.length > 0 ? toolbar : defaultToolbar,
      menubar: menubar,
      plugins: defaultplugins,
      end_container_on_empty_block: true,
      fontsize_formats: font.fontsizeFormats,
      font_formats: font.fontFormats,
      powerpaste_word_import: "clean",
      code_dialog_height: 450,
      code_dialog_width: 1000,
      advlist_bullet_styles: "square",
      advlist_number_styles: "default",
      imagetools_cors_hosts: ["www.tinymce.com", "codepen.io"],
      default_link_target: "_blank",
      link_title: false,
      nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
      init_instance_callback: (editor: any) => {
        if (content) {
          editor.setContent(content);
        }
        setHasInit(true);
        editor.on("NodeChange Change KeyUp SetContent", () => {
          setHasChange(true);
        });
      },
      setup(editor: any) {
        editor.on("FullscreenStateChanged", (e: any) => {
          setFullscreen(e.state);
        });
      },
    });
  };

  const destroyTinymce = () => {
    const { tinymceId } = propTypes;
    const tinymce = window.tinymce.get(tinymceId);
    if (fullscreen) {
      tinymce.execCommand("mceFullScreen");
    }

    if (tinymce) {
      tinymce.destroy();
    }
  };

  // setContent(value) {
  //   const { tinymceId } = this.props
  //   window.tinymce.get(tinymceId).setContent(value)
  // }
  const saveToGetContent = () => {
    const { tinymceId, getContent } = propTypes;
    if (getContent && typeof getContent === "function") {
      getContent(window.tinymce.get(tinymceId).getContent());
    }
  };

  /**
   * 上传图片成功回调
   *  */
  const imageSuccessCBK = (arr: any) => {
    const { tinymceId } = propTypes;
    arr.forEach((v: any) => {
      window.tinymce
        .get(tinymceId)
        .insertContent(`<img class="wscnph" src="${v.url}" >`);
    });
  };

  const header = (
    <PageHeader breadcrumb={["富文本实例"]} title={"富文本实例"} />
  );
  const { tinymceId } = propTypes;

  return (
    // <div className={styles["tinymce-components"]}>
    <div>
      <PageHeader header={header} loading={!!loading}>
        <div
          className={
            fullscreen
              ? "tinymce-container mce-fullscreen"
              : "tinymce-container"
          }
        >
          <div>
            {/* <textarea id={tinymceId} className={styles["tinymce-textarea"]} /> */}
            <textarea id={tinymceId} />
          </div>
          <div className="editor-custom-btn-container">
            <UploadImage
              className="editor-upload-btn"
              imageSuccessCBK={(arr: any) => {
                  imageSuccessCBK(arr);
              }}
            />
          </div>
          <Button
            type="primary"
            onClick={() => {
                saveToGetContent();
            }}
          >
            保存
          </Button>
        </div>
      </PageHeader>
    </div>
  );
};
export default Tinymce;
