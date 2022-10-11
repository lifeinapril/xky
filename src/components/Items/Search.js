import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import "../../css/Search.css";
import { IoMdSearch } from 'react-icons/io';


const Search = (props) => {
    const [term, setSearch] = useState(""); 
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
    const search=(e) => {
        e.preventDefault();
        window.location.href="/result/"+term;
    }
return (
        <Form className="md-12 d-flex app-search" onSubmit={(e)=>search(e)}>
            <Form.Control type="search" value={term} onChange={handleSearch}  placeholder="Search for anything fashion" aria-label="Search" />
            &nbsp;&nbsp;<IoMdSearch onClick={(e)=>search(e)} size={20} color={props.dark ? 'white':'black'} style={{'marginTop':10}}/>&nbsp;
        </Form>
)
}

export default Search;