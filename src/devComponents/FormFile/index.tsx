import React, { useCallback, useRef } from 'react';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadFile } from 'antd/lib/upload/interface';
import { Wrapper } from './Styled';
import { checkUploadFileFormat } from '../../FormComponents/utils';
import fileApis from './fileApis';

export type FileAcceptTypes =
  | '.jpg'
  | '.jpeg'
  | '.png'
  | '.gif'
  | '.pdg'
  | '.docx'
  | '.xlsx'
  | '.pptx';

export type FileFieldProps = {
  label: string;
  variables?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
} & {
  placeholder: string;
  accept: [];
  validate: {
    editable: string;
    required: string;
    viewable: string;
  };
};

const FormFile: React.FC<FileFieldProps> = (props) => {
  const { value, placeholder, accept, validate, onChange } = props;
  const ref = useRef<string | null>(null);

  let _file: UploadFile | null = null;
  try {
    _file = JSON.parse(value ?? '') as UploadFile;
  } catch (e) {
    // empty
  }

  const uploadFile = useCallback(
    async (options) => {
      const { file } = options;
      if (!checkUploadFileFormat(file.name, accept ?? [])) {
        message.error('文件格式不正确，请重新选择');
        return false;
      }
      // 检测图片大小
      if (file.size > 2 * 1024 * 1024) {
        message.error('上传附件大小不能超过2M');
        return false;
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('uploadType', 'attachment');
      formData.append('acceptFileTypes', (accept ?? []).toString());
      ref.current = value ?? null;
      onChange &&
        onChange(
          JSON.stringify({
            uid: file.uid,
            name: file.name,
            status: 'uploading',
            type: 'TODO'
          })
        );

      try {
        const result = await fileApis.uploadFile(formData);
        onChange &&
          onChange(
            JSON.stringify({
              uid: file.uid,
              name: file.name,
              url: result.originUrl,
              thumbUrl: result.thumbnailUrl,
              type: 'image'
            })
          );
      } catch (e) {
        onChange && onChange(ref.current);
        ref.current = null;
        message.error('图片上传失败，请稍后再试');
      }
      return true;
    },
    [accept, onChange, value]
  );

  const handleRemove = () => {
    onChange && onChange(null);
  };

  return (
    <Wrapper>
      <Upload
        accept={(accept ?? []).join()}
        fileList={_file ? [_file] : []}
        disabled={!validate?.editable}
        customRequest={uploadFile}
        onRemove={handleRemove}
        locale={{
          downloadFile: '',
          previewFile: '',
          removeFile: '',
          uploadError: '上传失败',
          uploading: '上传中。。。'
        }}
      >
        <Button icon={<UploadOutlined />} disabled={!validate?.editable}>
          {placeholder}
        </Button>
      </Upload>
    </Wrapper>
  );
};

export default FormFile;
