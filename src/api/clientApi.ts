import axiosInstance from './axios';
import { AxiosResponse } from 'axios';

const endpointGetClients = '/api/clients/';
const endpointCreateClient = '/api/clients/';
const endpointGetClientById = (id: string) => `/api/clients/${id}/`;
const endpointUpdateClient = (id: string) => `/api/clients/${id}/`;
const endpointPatchClient = (id: string) => `/api/clients/${id}/`;
const endpointDeleteClient = (id: string) => `/api/clients/${id}/`;

const getClients = (): Promise<AxiosResponse<any>> => axiosInstance.get(endpointGetClients);
const createClient = (clientData: any): Promise<AxiosResponse<any>> => axiosInstance.post(endpointCreateClient, clientData);
const getClientById = (id: string): Promise<AxiosResponse<any>> => axiosInstance.get(endpointGetClientById(id));
const updateClient = (id: string, clientData: any): Promise<AxiosResponse<any>> => axiosInstance.put(endpointUpdateClient(id), clientData);
const patchClient = (id: string, clientData: any): Promise<AxiosResponse<any>> => axiosInstance.patch(endpointPatchClient(id), clientData);
const deleteClient = (id: string): Promise<AxiosResponse<any>> => axiosInstance.delete(endpointDeleteClient(id));

export {
  getClients,
  createClient,
  getClientById,
  updateClient,
  patchClient,
  deleteClient,
};