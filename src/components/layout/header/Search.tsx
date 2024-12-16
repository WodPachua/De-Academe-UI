import { useState } from 'react';
import {
  IconButton,
  Dialog,
  DialogContent,
  Stack,
  Divider,
  Box,
  List,
  ListItemText,
  Typography,
  TextField,
  ListItemButton,
} from '@mui/material';
import { IconSearch, IconX } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Search = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);
  const [search, setSerach] = useState('');

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };

  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <IconSearch size="16" />
      </IconButton>
      <Dialog
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        fullWidth
        maxWidth={'sm'}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { position: 'fixed', top: 30, m: 0 } }}
      >
        <DialogContent className="testdialog">
          <Stack direction="row" spacing={2} alignItems="center">
            <TextField
              id="tb-search"
              placeholder="Search here"
              fullWidth
              onChange={(e) => setSerach(e.target.value)}
              inputProps={{ 'aria-label': 'Search here' }}
            />
            <IconButton size="small" onClick={handleDrawerClose2}>
              <IconX size="18" />
            </IconButton>
          </Stack>
        </DialogContent>
        <Divider />
        <Box p={2} sx={{ maxHeight: '60vh', overflow: 'auto' }}>
          <Typography variant="h5" p={1}>
            Search Results
          </Typography>
          <Box>
            <List component="nav">
                  <Box key={'Home'}>
                      <ListItemButton sx={{ py: 0.5, px: 1 }} href={'/dashboard'} component={Link}>
                        <ListItemText
                          primary={'Home'}
                          secondary={'/dashboard/'}
                          sx={{ my: 0, py: 0.5 }}
                        />
                      </ListItemButton>
                  </Box>
            </List>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Search;
