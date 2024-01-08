import axiosInstance from '../axios';
import { ResultData } from './interface';
import { ProjectObject } from './interface/project';

interface ProjectRequest {
  name: string;
  value: Number;
}

const prefix = 'project';
export const getProject = ():Promise<ResultData<ProjectObject[]>> => {
  return axiosInstance.get(prefix);
};

export const postProject = (data: ProjectRequest) => {
  return axiosInstance.post(prefix, data);
};
