import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PencilIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

import { allCustomers, deleteCustomer } from "../redux/actions/customerActions";

function CustomerList() {
  const { loading, data } = useSelector((state) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => dispatch(allCustomers()), []);

  function onTrashClick(e, customer) {
    e.preventDefault();
    console.log(customer);

    let yes = window.confirm(`Are you sure you want to delete, ${customer.name}?`);
    // console.log(yes);
    if (yes) dispatch(deleteCustomer(customer));
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="4" style={{ position: "relative", height: "10px" }}>
                <div
                  className="dot-elastic"
                  style={{ position: "absolute", transform: "translate(-50%,-50%)", top: "50%", left: "50%" }}
                ></div>
              </td>
            </tr>
          ) : (
            data.map((customer, i) => (
              <tr key={i}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <Link to={`/update/${customer.id}`}>
                    <PencilIcon style={{ width: "1rem", height: "1rem", marginRight: "0.5rem" }} />
                  </Link>
                  <TrashIcon style={{ width: "1rem", height: "1rem" }} onClick={(e) => onTrashClick(e, customer)} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="title">
        <div></div>
        <Link to="/create" className="button">
          Create
        </Link>
      </div>
    </>
  );
}

export default CustomerList;
