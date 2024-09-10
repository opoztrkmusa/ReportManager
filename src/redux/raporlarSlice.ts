// Güncellenmiş raporlarSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TypesForm } from '../types/types';

// Initial state
const initialState: {
    reports: TypesForm[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
} = {
    reports: [],
    status: 'idle',
    error: null,
};

// Async thunk to add a report
export const addReport = createAsyncThunk(
    'raporlar/addReport',
    async (report: TypesForm, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:5000/reports', report);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk to remove a report
export const removeReport = createAsyncThunk(
    'raporlar/removeReport',
    async (reportId: string, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost:5000/reports/${reportId}`);
            return reportId;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const raporlarSlice = createSlice({
    name: 'raporlar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addReport.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addReport.fulfilled, (state, action) => {
                state.status = 'idle';
                state.reports.push(action.payload);
            })
            .addCase(addReport.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            })
            .addCase(removeReport.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(removeReport.fulfilled, (state, action) => {
                state.status = 'idle';
                state.reports = state.reports.filter(report => report.id !== action.payload);
            })
            .addCase(removeReport.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload as string;
            });
    },
});

export default raporlarSlice.reducer;
