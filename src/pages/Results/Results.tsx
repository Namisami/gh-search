import { Container, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store/store';
import { Repository, selectCurrentRepository, selectRepositories, selectRepositoriesError, selectRepositoriesLoading, setCurrentRepository } from '../../store/reducers/RepositoryReducer';
import Error from '../../components/Error/Error';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import styles from './Results.module.sass';

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
    type: "date",
    flex: 1,
    disableColumnMenu: true,
    valueGetter: (value) => new Date(value)
  },
];

const Results = () => {
  const repositories = useSelector(selectRepositories);
  const loading = useSelector(selectRepositoriesLoading);
  const error = useSelector(selectRepositoriesError);
  const currentRepository = useSelector(selectCurrentRepository);

  const dispatch = useAppDispatch();

  if (error) return <Error message={ error } />

  const onRepositorySelect = (params: GridRowParams) => {
    dispatch(setCurrentRepository(params.row));
  }

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
            onRowClick={ onRepositorySelect }
          />

        </div>
      </Container>
      <RepositoryCard 
        className={ styles.currentRepository }
        repository={ currentRepository }
      />
    </div>
  )
};

export default Results;
