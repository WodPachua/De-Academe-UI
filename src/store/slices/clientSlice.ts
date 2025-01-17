import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getClients, createClient, updateClient, deleteClient } from '../../api/clientApi';

interface ClientState {
  clients: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ClientState = {
  clients: [],
  loading: false,
  error: null,
};

export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
  const response = await getClients();
  return response.data;
});

export const addClient = createAsyncThunk('clients/addClient', async (clientData: any) => {
  const response = await createClient(clientData);
  return response.data;
});

export const editClient = createAsyncThunk('clients/editClient', async ({ id, clientData }: { id: string, clientData: any }) => {
  const response = await updateClient(id, clientData);
  return response.data;
});

export const removeClient = createAsyncThunk('clients/removeClient', async (id: string) => {
  await deleteClient(id);
  return id;
});

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchClients.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.clients = action.payload;
      })
      .addCase(fetchClients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch clients';
      })
      .addCase(addClient.fulfilled, (state, action: PayloadAction<any>) => {
        state.clients.push(action.payload);
      })
      .addCase(editClient.fulfilled, (state, action: PayloadAction<any>) => {
        const index = state.clients.findIndex(client => client.client_id === action.payload.client_id);
        if (index !== -1) {
          state.clients[index] = action.payload;
        }
      })
      .addCase(removeClient.fulfilled, (state, action: PayloadAction<string>) => {
        state.clients = state.clients.filter(client => client.client_id !== action.payload);
      });
  },
});

export default clientSlice.reducer;