import React, { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { PATHS } from "../../../../routes/paths";
import { Button } from "../../button/generic/Button";
import { Icon } from "../../icons/Icon";
import style from "./Searchbar.module.scss";

const SEARCH = "Cerca";

interface ISearchbarProps {
    className?: string;
    onClickSearch?: () => void;
}
export const Searchbar: React.FC<ISearchbarProps> = ({
    onClickSearch,
    className = ""
}) => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const history = useHistory();

    const onSearch = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (searchTerm === "") return;
        setSearchTerm("");
        onClickSearch?.();
        history.push(PATHS.SEARCH, searchTerm.toLowerCase());
    },[history, onClickSearch, searchTerm])
    const onSearchTermChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(evt.target.value);
    },[])
    return (
        <form onSubmit={onSearch} className={[style.searchbar, className].join(" ")}>
            <Icon icon="search" className={style.iconSearch}/>
            <input 
                type="text" 
                className={style.searchbarInput}
                value={searchTerm} 
                onChange={onSearchTermChange}
            />
            <Button text={SEARCH} submit/>
        </form>
    )
}