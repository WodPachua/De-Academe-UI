import {
    Grid,
    InputAdornment,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
  } from '@mui/material';
  import CustomFormLabel from '../shared/CustomFormLabel';
  import CustomOutlinedInput from '../shared/CustomOutlinedInput';
  import {
    IconBriefcase,
    IconBuildingArch,
    IconBuildingChurch,
    IconInfoCircle,
    IconMail,
    IconMessage2,
    IconPhone,
    IconQuote,
    IconUser,
    IconUsersGroup,
    IconId,
    IconCheck,
  } from '@tabler/icons-react';
  import Stack from '@mui/material/Stack';
  import Autocomplete from '@mui/material/Autocomplete';
  import CustomTextField from '../shared/CustomTextField';
  import { useFormik } from 'formik';
  import * as yup from 'yup';
  import CircularProgress from '@mui/material/CircularProgress';
  import Box from '@mui/material/Box';
  import PageContainer from '../layout/PageContainer';
  import { useState } from 'react';
  import ParentCard from '../shared/ParentCard';
  
  const validationSchema = yup.object({
    first_name: yup.string().max(100, 'First name must be at most 100 characters').required('First name is required'),
    last_name: yup.string().max(100, 'Last name must be at most 100 characters').required('Last name is required'),
    email: yup.string().email('Enter a valid email').max(254, 'Email must be at most 254 characters').required('Email is required'),
    nin: yup.string().max(100, 'NIN must be at most 100 characters').required('NIN is required'),
    phone_number: yup.string().max(15, 'Phone number must be at most 15 characters').required('Phone number is required'),
    status: yup.string().oneOf(['partial', 'full'], 'Invalid status').required('Status is required'),
    payment_status: yup.boolean().required('Payment status is required'),
  });
  
  interface FormValues {
      first_name: string;
      last_name: string;
      email: string;
      nin: string;
      phone_number: string;
      status: string;
      payment_status: boolean;
  }
  
  const ClientForm = () => {
    const [loading, setLoading] = useState(false);
  
      const handleSubmitForm = async (values: FormValues): Promise<void> => {
          setLoading(true);
          const {
              first_name,
              last_name,
              email,
              nin,
              phone_number,
              status,
              payment_status,
          } = values;
  
          const formData: FormData = new FormData();
          formData.append('first_name', first_name);
          formData.append('last_name', last_name);
          formData.append('email', email);
          formData.append('nin', nin);
          formData.append('phone_number', phone_number);
          formData.append('status', status);
          formData.append('payment_status', payment_status.toString());
  
          setLoading(false);
      };
  
    const formik = useFormik({
      initialValues: {
        first_name: '',
        last_name: '',
        email: '',
        nin: '',
        phone_number: '',
        status: '',
        payment_status: false,
      },
      validationSchema,
      onSubmit: async (values) => {
        handleSubmitForm(values);
      },
    });
  
    return (
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} xs={12}>
          <PageContainer title="Create New Client" description="Create New Client">
          <Box>
          <ParentCard title="Create New Client" footer={<>
          <Stack direction="row" spacing={2}>
                <Button variant="text" color="error">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  {loading ? <CircularProgress size={24} /> : 'Save'}
                </Button>
              </Stack>
          </>}>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            {/* 1 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="first_name">
                First Name
              </CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconUser size="20" />
                  </InputAdornment>
                }
                id="first_name"
                placeholder="First Name"
                fullWidth
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              />
            </Grid>
            {/* 2 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="last_name">Last Name</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconUser size="20" />
                  </InputAdornment>
                }
                id="last_name"
                placeholder="Last Name"
                fullWidth
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              />
            </Grid>
            {/* 3 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="email">Email</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconMail size="20" />
                  </InputAdornment>
                }
                id="email"
                placeholder="Email"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
              />
            </Grid>
            {/* 4 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="nin">NIN</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconId size="20" />
                  </InputAdornment>
                }
                id="nin"
                placeholder="NIN"
                fullWidth
                name="nin"
                value={formik.values.nin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.nin && Boolean(formik.errors.nin)}
              />
            </Grid>
            {/* 5 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="phone_number">Phone Number</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconPhone size="20" />
                  </InputAdornment>
                }
                id="phone_number"
                placeholder="Phone Number"
                fullWidth
                name="phone_number"
                value={formik.values.phone_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
              />
            </Grid>
            {/* 6 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="status">Status</CustomFormLabel>
              <Autocomplete
                disablePortal
                id="status"
                options={['partial', 'full']}
                fullWidth
                value={formik.values.status}
                onChange={(event, newValue) => formik.setFieldValue('status', newValue)}
                renderInput={(params) => (
                  <CustomTextField
                    {...params}
                    placeholder="Status"
                    aria-label="Status"
                  />
                )}
              />
            </Grid>
            {/* 7 */}
            <Grid item xs={12} md={6}>
              <CustomFormLabel htmlFor="payment_status">Payment Status</CustomFormLabel>
              <CustomOutlinedInput
                startAdornment={
                  <InputAdornment position="start">
                    <IconCheck size="20" />
                  </InputAdornment>
                }
                id="payment_status"
                placeholder="Payment Status"
                fullWidth
                name="payment_status"
                value={formik.values.payment_status}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.payment_status && Boolean(formik.errors.payment_status)}
              />
            </Grid>
          </Grid>
        </form>
          </ParentCard>
          </Box>
          </PageContainer>
          </Grid>
      </Grid>
    );
  };
  
  export default ClientForm;