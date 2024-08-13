import { Box, Chip, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { Repository } from '../../store/reducers/RepositoryReducer';
import styles from './RepositoryCard.module.sass';
import { formatNumber } from '../../utils/formatNumber';

interface RepositoryCard {
  className?: string
  repository: Repository | null
}

const RepositoryCard = ({
  className,
  repository,
}: RepositoryCard) => {
  if (!repository) return (
    <Box 
      className={ `${styles.repositoryCardCenter} ${className}` }
      sx={{ backgroundColor: "#F2F2F2" }}
    >
      <Typography 
        className={ styles.selectRepository } 
        variant='body1'
      >
        Выберите репозитарий
      </Typography>
    </Box>
  )
  return (
    <Box 
      className={ `${styles.repositoryCard } ${className}` }
      sx={{ backgroundColor: "#F2F2F2" }}
    >
      <Typography 
        className={ styles.fullName } 
        variant='h2'
      >
        { repository.full_name }
      </Typography>
      <div className={ styles.cardContent }>
        <Stack direction="row" justifyContent="space-between">
          <Chip 
            label={ repository.language ? repository.language : "Без языка" } 
            color='primary'
          />
          <div className={ styles.stars }>
            <StarIcon sx={{ color: '#FFB400' }}/>
            <Typography variant='body1' className={ styles.starsCount }>
              { formatNumber(repository.stargazers_count) }
            </Typography>
          </div>
        </Stack>
        <Stack 
          direction="row" 
          className={ styles.topics } 
          gap="8px"
          flexWrap="wrap"
        >
          { repository.topics.map((topic) => <Chip
              label={ topic }
              sx={{
                "&.MuiChip-root": {
                  height: 24
                }
              }}
            />
          )}
        </Stack>
        <Typography 
          className={ styles.licence }
          variant='body1'
          sx={{
            marginTop: "24px",
          }}
        >
          { repository.license?.name ? repository.license.name : "Лицензия не указана" }
        </Typography>
      </div>
    </Box>
  )
};

export default RepositoryCard;
