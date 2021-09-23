import axios from 'axios';

export interface UploadUrl {
  originUrl: string;
  thumbnailUrl: string;
}

const uploadFile = (file: FormData): Promise<UploadUrl> => {
  return axios.post('/files', file);
};
export default { uploadFile };
