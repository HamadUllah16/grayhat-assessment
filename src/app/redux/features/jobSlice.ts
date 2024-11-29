import axiosInstance from "@/app/axios/axiosInstance"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface jobPost {
    _id: string,
    poster: string,
    title: string,
    company: string,
    jobType: string,
    salaryRange: string,
    createdAt: string,
    appliedCandidates: { email: string, name: string }[]
}

const initialState = {
    title: '',
    company: '',
    jobType: '',
    salaryRange: '',
    appliedCandidates: [],
    allJobPosts: <jobPost[]>[],

    message: '',
    loading: false,
    error: ''
}

export const createJobPost = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'job/createJobPost',
    async (data: any, { rejectWithValue, dispatch }) => {
        try {
            const response = await axiosInstance.post('/job/create-job-post', data.values);
            data.formikHelpers.resetForm(); //resetting form if success

            return response;

        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message });
        }
    }
)

export const applyToJob = createAsyncThunk<any, any, { rejectValue: { message: string } }>(
    'job/applyToJob',
    async (data: any, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post('/job/apply-to-job', data);
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

export const getAllJobs = createAsyncThunk<any, void, { rejectValue: { message: string } }>(
    'job/getAllJobs',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get('/job/all-job-posts');
            return response;
        } catch (error: any) {
            return rejectWithValue({ message: error.response?.data?.message })
        }
    }
)

const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        pushToJobPosts: (state, action) => {
            state.allJobPosts.push(action.payload);
        }
    },
    extraReducers(builder) {
        // create job post builder
        builder.addCase(createJobPost.pending, state => {
            state.loading = true;
        })
        builder.addCase(createJobPost.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload?.message;
        })
        builder.addCase(createJobPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!;
        })

        // get all job posts builder
        builder.addCase(getAllJobs.pending, state => {
            state.loading = true;
        })
        builder.addCase(getAllJobs.fulfilled, (state, action) => {
            state.loading = false;
            state.allJobPosts = action.payload?.allJobPosts;
            state.message = action.payload?.message;
        })
        builder.addCase(getAllJobs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })

        // apply to job builder
        builder.addCase(applyToJob.pending, state => {
            state.loading = true;
        })
        builder.addCase(applyToJob.fulfilled, (state, action) => {
            const email = action.payload?.email;
            const name = action.payload?.name;
            const jobId = action.payload?.jobId
            state.loading = false;
            const job = state.allJobPosts.find((job) => job._id === jobId) //finding the relevant job
            job?.appliedCandidates.push({ email, name }) //pushing the worker to applied list

            state.message = action.payload?.message!;
        })
        builder.addCase(applyToJob.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message!
        })
    },
})

export default jobSlice.reducer;
export const { pushToJobPosts } = jobSlice.actions;