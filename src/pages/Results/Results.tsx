import { Box, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { Repository, selectRepositories, selectRepositoriesError, selectRepositoriesLoading } from '../../store/reducers/RepositoryReducer';
import styles from './Results.module.sass';
import Error from '../../components/Error/Error';

const columns: GridColDef<(Repository[])[number]>[] = [
  { 
    field: 'full_name', 
    headerName: 'Название',
    flex: 1, 
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'language',
    headerName: 'Язык',
    flex: 1,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: 'forks_count',
    headerName: 'Число форков',
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: 'stargazers_count',
    headerName: 'Число звезд',
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: 'updated_at',
    headerName: 'Дата обновления',
    flex: 1,
    disableColumnMenu: true,
    valueGetter: (value) => `${new Date(value).toLocaleDateString()}`
  },
];

const Results = () => {
  const repositories = useSelector(selectRepositories);
  const loading = useSelector(selectRepositoriesLoading);
  const error = useSelector(selectRepositoriesError);

  if (error) return <Error message={ error } />

  return (
    <div className={ styles.results }>
      <Container 
        className={ styles.resultsList } 
        maxWidth='xl'
        sx={{ paddingRight: '16px !important' }}
      >
        <Typography
          className={ styles.resultsListTitle }
          variant='h1'
        >
          Результаты поиска
        </Typography>
        <div>
          <DataGrid 
            loading={loading}
            rows={repositories}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            sx={{
              '&.MuiDataGrid-root': {
                border: 'none',
              },
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 'bold',
              }
            }}
            pageSizeOptions={[10]}
            disableColumnResize
          />

        </div>
      </Container>
      <Box 
        className={ styles.currentRepository }
        sx={{ backgroundColor: "#F2F2F2" }}
      >

      </Box>
    </div>
  )
};

export default Results;
