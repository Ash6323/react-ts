import React, { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap';

interface ProductItem 
{
    id: number;
    item_Name: string;
    item_Description: string;
    item_Price: number;
    item_Quantity: number;
}
interface IProduct{
    productsList: ProductItem[]
}

const ViewProducts: React.FC<IProduct> = ({productsList}) => {

    const [itemList, setItemList] = useState<ProductItem[]>(productsList);

    const [search, setSearch] = useState('');
    const filteredItems = 
    {
        list: itemList.filter((item) =>item.item_Name.toLowerCase().includes(search.toLowerCase())),
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => 
    {
        setSearch(event.target.value);
    };

    const [count, setCount] = useState(0);
    function SortItemList() 
    {
        setCount(count + 1);
        if(count%2 == 1)
        {
            itemList.sort((a, b) => a.item_Name.localeCompare(b.item_Name));
            setItemList([...itemList]);
        }
        else if(count%2 == 0)
        {
            itemList.sort((a, b) => b.item_Name.localeCompare(a.item_Name));
            setItemList([...itemList]);
        }
    }

  return (
    <div className="container shadow">
          <div className="d-flex justify-content-center align-items-center search-add-item-div">
            <div className="col flex-basis-70">
            <input
                list="items-list"
                type="text"
                onChange={handleSearch}
                placeholder="Search for an Item"
                className="form-control input-item"
                id="item-search-input">
            </input>
              <datalist id="items-list">
                {itemList.map((item) => (
                  <div key={item.id}>
                    <option value={item.item_Name}></option>
                  </div>
                  ))}
              </datalist>
            </div>                        
            <Button
              className="sort-items-btn"
              variant="success"
              onClick={SortItemList}>
              Sort Items
            </Button>
          </div>

          <hr></hr>
          <div className="table-responsive card">
            <table className="table table-bordered table-striped ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.item_Name}</td>
                    <td>{item.item_Description}</td>
                    <td>{item.item_Price}</td>
                    <td>{item.item_Quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}
export default ViewProducts;
  