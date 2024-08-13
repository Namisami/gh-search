import { useState } from "react";
import { InputBase, Button } from "@mui/material";
import { fetchRepositories } from "../../store/reducers/RepositoryReducer";
import { useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";

import styles from './Search.module.sass';

const Search = () => {
  const [q, setQ] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchRepositories(q));
    navigate("/results");
  };

  const onQChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  }

  return (
    <form className={ styles.search } onSubmit={ onSearch }>
      <InputBase 
        className={ styles.searchField } 
        placeholder='Введите поисковый запрос'
        value={ q }
        onChange={ onQChange } 
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
};

export default Search;
