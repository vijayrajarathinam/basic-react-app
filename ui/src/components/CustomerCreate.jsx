import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createCustomers, allCustomers, updateCustomers } from "../redux/actions/customerActions";

function CustomerCreate() {
  const [data, setData] = useState({ name: "", email: "" });
  //   const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customers.data);
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!customers.length) dispatch(allCustomers());
  }, []);

  useEffect(() => {
    if (params.id && customers.length) {
      console.log(customers);
      const obj = customers.find((cust) => cust.id == params.id);
      if (obj) {
        setData({ name: obj.name, email: obj.email });
      }
    }
  }, [params, customers]);

  function onSubmit(e) {
    e.preventDefault();
    if (!data.name.length) return;
    if (!data.email.length) return;

    if (params.id) dispatch(updateCustomers({ ...data, id: params.id }));
    else dispatch(createCustomers(data));

    history("/");
  }
  const onInputChange = ({ target }) => setData((data) => ({ ...data, [target.name]: target.value }));
  return (
    <div className="form">
      <div className="form-item">
        <input
          type="text"
          id="username"
          autocomplete="off"
          required
          value={data.name}
          name="name"
          onChange={onInputChange}
        />
        <label for="username">Name</label>
      </div>

      <div className="form-item">
        <input
          type="text"
          id="password"
          autocomplete="off"
          required
          value={data.email}
          name="email"
          onChange={onInputChange}
        />
        <label for="password">Email</label>
      </div>
      <div className="title" style={{ width: "430px" }}>
        <button className="btn btn-primary" onClick={onSubmit}>
          {params.id ? "Update" : "Create"}
        </button>
        <button onClick={() => history("/")} className="btn btn-danger">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default CustomerCreate;
