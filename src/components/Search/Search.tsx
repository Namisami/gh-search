import { InputBase, Button } from "@mui/material"
import styles from './Search.module.sass'

const Search = () => {
  return (
    <form className={ styles.search }>
      <InputBase 
        className={ styles.searchField } 
        placeholder='Введите поисковый запрос' 
      />
      <Button 
        className={ styles.searchButton }
        variant='contained' 
        type="submit"
      >
        Искать
      </Button>
    </form>
  )
}

export default Search
