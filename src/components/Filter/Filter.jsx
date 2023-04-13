import React from 'react';
import { setFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';

import { FilterInput, FilterLabel } from './Filter.style';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectFilter);

  const changeFilter = evt => {
    const filter = evt.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={inputValue} onChange={changeFilter} />
    </FilterLabel>
  );
};
