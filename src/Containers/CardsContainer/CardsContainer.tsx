import React from 'react';
import { ApiCompany } from '../../Api/ApiCompany';
import useAppDispatch from "../../Hooks/useAppDispatch";
import useAppSelector from "../../Hooks/useAppSelector";
import { useFetching } from '../../Hooks/useFetching';
import { ICompany } from '../../Models/ICompany';
import { addCompany, setSelected } from '../../Store/reducer/company';
import Cards from "../../Components/Cards/Cards"

const CardsContainer: React.FC = () => {
  const company = useAppSelector(state => state.company.company);
  const dispatch = useAppDispatch();
  const [fetchCards, isLoading] = useFetching(async () => {
    const response: ICompany[] = await ApiCompany.getCompanyData();
    dispatch(addCompany(response));
  });

  React.useEffect(() => {
    setTimeout(() => {
      fetchCards();
    }, 2000)

  }, []);

  const changeSelectedPost = (id: number | undefined) => {
    dispatch(setSelected(id))
  };

  return (
    <Cards companyList={company} changeSelectedPost={changeSelectedPost} isLoading={isLoading} />
  );
};

export default CardsContainer;
