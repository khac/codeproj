import React, {useState} from 'react';
import {generateArticle} from '../../server/openAI';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import GeneratedCards from './GeneratedCards';

const SearchArticle = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [curList, setCurList] = useState([]);
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearch = async () => {
        // Perform search logic here using the "searchTerm" value
        console.log('Search term:', searchTerm);
        setIsLoading(true);
        const respose = await generateArticle(searchTerm);
        const newElement = respose.data.choices[0].message.content;
        // console.log(respose.data.choices[0].message.content);
        const newList = [newElement].concat(curList)
        setCurList(newList)
        setIsLoading(false);
      };
    return (
        <div style={{'margin': '20px auto', 'padding': '10px 0px', 'width': '80%'}}>
          <TextField
            type="text"
            fullWidth
            autoComplete='off'
            placeholder="Enter search term"
            value={searchTerm}
            onChange={handleInputChange}
            variant="filled"
            disabled={isLoading}
          />
          <Button onClick={handleSearch} disabled={isLoading}>Search</Button>
          <GeneratedCards curList={curList} />
        </div>
      );
};

export default SearchArticle;

