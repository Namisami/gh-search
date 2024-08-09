import { Box, Container, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import styles from './Results.module.sass';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { 
    field: 'name', 
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
    field: 'forks',
    headerName: 'Число форков',
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: 'start',
    headerName: 'Число звезд',
    flex: 1,
    disableColumnMenu: true,
  },
  {
    field: 'date_update',
    headerName: 'Дата обновления',
    flex: 1,
    disableColumnMenu: true,
  },
];

const rows = [
  { id: 1, name: "Название репозитория", language: "Python", forks: 9, start: 36, date_update: '00:00:0000'},
  { id: 2, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 3, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 4, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 5, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 6, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 7, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 8, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 9, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 10, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
  { id: 11, name: "Название репозитория", language: "Python", forks: 8, start: 36, date_update: '00:00:0000'},
];

const Results = () => {
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
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            sx={{
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
