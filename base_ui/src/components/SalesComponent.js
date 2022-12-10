import React from "react";
import { get_orders_api } from '../functions/getOrders'

export function Sales() {
    const [list, setList] = React.useState([]);
    const [pages, setPages] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [showModal, setShowModal] = React.useState(false);
    const [modalDescription, setModalDescription] = React.useState("");
    const [itemId, setItemId] = React.useState(null);
    const [error, setError] = React.useState("");
    const [item, setItem] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);

    const success = (data) => {
        setList(data.data);
        const newPages = [];
        if (data.count > 10) {
          for (let i=0; i<Math.ceil(data.count / 10); i++) {
            newPages.push({
              name: (i+1).toString(),
              page: i,
            });
            console.log("page",i);
          }
          if (page > newPages.length-1) {
            setPage(page-1);
          }
        } else {
          setPage(0);
        }
        setPages(newPages);
      };
    
    const getData = ()=>{
        get_orders_api(page, success, (text)=>{console.log("Error: ", text)});
      };
      React.useEffect(()=>{
        getData();
      }, [page]);

    const logout = async (e)=>{
        await localStorage.setItem("salesToken",null);
        window.location = "/login";
      };

    return (
        <div>
          <div style={{maxWidth: "800px", margin: "auto", marginTop: "1em", marginBottom: "1em",
                        padding: "1em"}} className="shadow">
            <div style={{display: "flex", flexDirection: "row"}}>
              <span>Super Orders App</span>
              <a className="btn btn-light" style={{marginLeft: "auto"}} onClick={logout}>Logout</a>
            </div>
          </div>
          <div style={{maxWidth: "800px", margin: "auto", marginTop: "1em", marginBottom: "1em",
                        padding: "1em"}} className="shadow">
            <div style={{display: "flex", flexDirection: "row", marginBottom: "5px"}}>
              {pages.length > 0 && <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className={"page-item " + (page === 0?"disabled":"")} onClick={(e)=>{
                        e.preventDefault();
                        setPage(Math.max(page-1,0));
                  }}><a className="page-link" href="#" aria-label="Previous"><span
                      aria-hidden="true">«</span></a></li>
                  {pages.map((el)=><li key={"page" + el.page} onClick={(e)=>{
                      setPage(el.page);
                    }} className={"page-item "+(page===el.page?"active":"")}>
                    <a className="page-link" href="#">
                      {el.name}
                    </a></li>)}
                  <li className={"page-item " + (page === pages.length-1?"disabled":"")} onClick={(e)=>{
                        setPage(Math.min(page+1,pages.length-1));
                  }}><a className="page-link" href="#" aria-label="Next"><span
                      aria-hidden="true">»</span></a></li>
                </ul>
              </nav>}
              {/* <a className="btn btn-light" style={{marginLeft: "auto"}}
                 onClick={newOrder}
              >New Sales Order</a> */}
            </div>
            <table className="table table-hover caption-top">
              <thead className="table-light">
              <tr>
                <th>id</th>
                <th>Date</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              { list.map((row)=>
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.date}</td>
                  <td>{row.item}</td>
                  <td>{row.price}</td>
                  <td>{row.quantity}</td>
                  <td>{row.amount}</td>
                  {/* <td>
                    <a className="btn btn-light" style={{marginLeft: "auto"}}
                      onClick={(e)=>{editOrder(row)}}>Edit</a>{" "}
                    <a className="btn btn-light" style={{marginLeft: "auto"}}
                      onClick={(e)=>{deleteOrder(row.id)}}>Delete</a>
                  </td> */}
                </tr>
              )}
              </tbody>
            </table>
          </div>
        </div>
      );
    }