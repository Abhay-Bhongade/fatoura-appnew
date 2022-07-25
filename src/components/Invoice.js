import React, { useState, useEffect } from "react";
import "./Invoice.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Table from "react-bootstrap/Table";
import Navbar from "./Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTODO, addData, DLT } from "../Redux/Action/Actionadd";
import VerticalHeader from "./VerticalHeader";

const Invoice = () => {
    //FOR MODAL ONE
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    //FOR MODAL TWO
    const [modal2, setModal2] = useState(false);
    const toggleModal2 = () => {
        setModal2(!modal2);
    };

    if (modal2) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    const navigate = useNavigate();
    const {
        register: register2,
        formState: { errors: errors2 },
        handleSubmit: handleSubmit2,
    } = useForm();
    const [isSubmit2, setIsSubmit2] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [isSubmit, setIsSubmit] = useState(false);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        setIsSubmit(true);
        dispatch(addTODO(data));
    };

    const onSubmit2 = (data) => {
        console.log(data);
        setIsSubmit2(true);
        dispatch(addData(data));
    };

    useEffect(() => {
        if (Object.keys(errors2).length === 0 && isSubmit2) {
            navigate("/invoice");
        }
    }, [errors2]);

    const myData = useSelector((state) => state.addReducer.list);
    console.log(myData);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            navigate("/myDocument");
        }
    }, [errors]);

    const [total, setTotal] = useState();

    const totalPrice = () => {
        let total = 0;
        myData.map((ele) => {
            total = ele.quantity * ele.unitPrice + total;
        });
        setTotal(total);
    };

    useEffect(() => {
        totalPrice();
    }, [totalPrice]);

    return (
        <>
           <VerticalHeader/>

            <div className="page-content" id="content">
                <Navbar />

                <section className="bg-light my-3 mx-4 button-r2  secpadding">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="fw-bold fs-4 mb-3 ">
                            <span className="pbutton rounded-circle border mainbg2">
                                <i className="fa-solid fa-plus"></i>
                            </span>{" "}
                            CREATE - Invoice
                        </div>
                        <div className="container  mainbg button-r2">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Invoice Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r "
                                            placeholder="INV2022-00001"
                                            {...register("invoiceNum", { required: true })}
                                        />
                                        {errors.invoiceNum?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Invoice Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control button-r"
                                            {...register("invoiceDate", { required: true })}
                                        />
                                        {errors.invoiceDate?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Due Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control button-r"
                                            {...register("dueDate", { required: true })}
                                        />
                                        {errors.dueDate?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Reference Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control button-r "
                                            {...register("referenceNum", { required: true })}
                                        />
                                        {errors.referenceNum?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="fw-bold my-2">Client Name</div>
                                    <hr />
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold "
                                        >
                                            <i className="fa-solid fa-user me-1"></i>Customer Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r"
                                            {...register("customerName", { required: true })}
                                        />
                                        {errors.customerName?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            <i className="fa-solid fa-user-group me-1 my-2"></i>
                                            Billing Address
                                        </label>
                                        <textarea
                                            className="form-control border border-dark button-r mb-2"
                                            {...register("billingAddress", { required: true })}
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                        ></textarea>
                                        {errors.billingAddress?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold my-2"
                                        >
                                            <i className="fa-solid fa-truck me-1"></i>Shipping Address
                                        </label>
                                        <textarea
                                            className="form-control border border-dark button-r"
                                            {...register("shippingAddress", { required: true })}
                                            id="exampleFormControlTextarea1"
                                            rows="5"
                                        ></textarea>
                                        {errors.shippingAddress?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                        <hr />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label fw-bold"
                                    >
                                        Company Logo
                                    </label>
                                    <div className="bg-white p-4 mb-2 button-r2">
                                        <img
                                            src="./assests/fatoura-logo.png"
                                            width={230}
                                            height={100}
                                            alt="fatoura-logo1"
                                        />
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <button
                                            className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 "
                                            type="button"
                                        >
                                            Change
                                        </button>

                                        <button
                                            className="btn btn-outline-info text-dark mx-1 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 invoiceButton"
                                            type="button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            <i className="fa-solid fa-user me-1"></i>Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r"
                                            {...register("companyName", { required: true })}
                                        />
                                        {errors.companyName?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            <i className="fa-solid fa-building me-1"></i>Company
                                            Address
                                        </label>
                                        <textarea
                                            className="form-control border border-dark button-r"
                                            {...register("companyAddress", { required: true })}
                                            id="exampleFormControlTextarea1"
                                            rows="4"
                                        ></textarea>
                                        {errors.companyAddress?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Entity ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r "
                                            {...register("entityID", { required: true })}
                                        />
                                        {errors.entityID?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            Tax Number
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r"
                                            {...register("taxNumber", { required: true })}
                                        />
                                        {errors.taxNumber?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="col mb-5">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            <i className="fa-solid fa-clipboard"></i> Description
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r"
                                            {...register("description", { required: true })}
                                        />
                                        {errors.description?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>

                                    <div className="ulb buttonone pb-2 mb-5">
                                        <Table>
                                            <thead>
                                                <tr className="ulbg px-3  mb-3 fw-bold text-white py-3 buttonone">
                                                    <td>Item Name</td>
                                                    <td>SKU</td>
                                                    <td>Quantity</td>
                                                    <td>Unit Price</td>
                                                    <td>Total Amount</td>
                                                    <td>Tax</td>
                                                    <td>Actions</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {myData.length ? (
                                                    <>
                                                        {myData.map((item, id) => {
                                                            console.log(id);
                                                            return (
                                                                <tr key={id}>
                                                                    <td>{item.itemName}</td>
                                                                    <td>{item.sku}</td>
                                                                    <td>{item.quantity}</td>
                                                                    <td>${item.unitPrice}</td>
                                                                    <td>${item.quantity * item.unitPrice}</td>
                                                                    <td>
                                                                        <button className="btn btn-white  px-4 py-1 text-white second-b spantwo lead button-r2">
                                                                            No Tax
                                                                        </button>
                                                                    </td>
                                                                    <td>
                                                                        {" "}
                                                                        <span className="spanbgbutton me-2">
                                                                            {" "}
                                                                            <i className="fa-solid fa-pen-to-square"></i>{" "}
                                                                        </span>{" "}
                                                                        <span
                                                                            className="spanbgbutton2"
                                                                            onClick={() => dispatch(DLT(id))}
                                                                        >
                                                                            <i className="fa-solid fa-trash-can"></i>
                                                                        </span>
                                                                    </td>
                                                                </tr>
                                                            );
                                                        })}
                                                    </>
                                                ) : (
                                                    <>
                                                        {" "}
                                                        <p className="text-center">No items added</p>
                                                    </>
                                                )}
                                            </tbody>
                                        </Table>

                                        <div className="d-flex justify-content-start ">
                                            <button
                                                className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 "
                                                onClick={toggleModal}
                                            >
                                                Add more items <i className="fa-solid fa-plus ms-2"></i>
                                            </button>

                                            <button
                                                className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 "
                                                type="button"
                                                onClick={toggleModal2}
                                            >
                                                Save item list
                                            </button>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center">
                                        <div>
                                            <span className="fw-bold">Currency :</span>
                                            <span className="w-25">
                                                {" "}
                                                <select
                                                    className="form-select inpfield"
                                                    aria-label="Default select example"
                                                >
                                                    <option selected> select value</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>{" "}
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex justify-content-around fw-bold">
                                                <span className="me-5">Subtotal:</span>
                                                <span className="ms-5">${total}.00</span>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between fw-bold">
                                                <span>Total:</span>
                                                <span>${total}.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p>
                                        <i className="fa-solid fa-circle-info me-2"></i>
                                        If you are going accept payments via PayPal, you may need to
                                        convert amount to equivalent USD amount which is accept by
                                        PayPal. To know more about PayPal accepted currencies{" "}
                                        <a href="">Click here</a>
                                    </p>
                                    <hr />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <div className="col">
                                        <label
                                            htmlFor="exampleInputEmail1"
                                            className="form-label fw-bold"
                                        >
                                            <i className="fa-solid fa-clipboard me-2"></i>Terms and
                                            Conditions
                                        </label>
                                        <textarea
                                            className="form-control border border-dark button-r"
                                            id="exampleFormControlTextarea1"
                                            {...register("termAndConditions", { required: true })}
                                            rows="8"
                                        ></textarea>
                                        {errors.termAndConditions?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <p className="fw-bold">QR Code</p>
                                    <div className="col">
                                        <label htmlFor="exampleInputEmail1" className="form-label ">
                                            Heading
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control button-r"
                                            {...register("heading", { required: true })}
                                        />
                                        {errors.heading?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>
                                    <label htmlFor="exampleInputEmail1" className="form-label ">
                                        Image
                                    </label>
                                    <div className="bg-white p-4 mb-2 button-r2">
                                        <img
                                            src="./assests/fatoura-logo.png"
                                            width={230}
                                            height={100}
                                            alt="fatoura-logo1"
                                        />
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <button
                                            className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 "
                                            type="submit"
                                        >
                                            Change
                                        </button>

                                        <button
                                            className="btn btn-outline-info text-dark mx-1 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 invoiceButton"
                                            type="button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                            <div className="row">
                                <div className="col-md-8">
                                    <label
                                        htmlFor="exampleInputEmail1"
                                        className="form-label fw-bold"
                                    >
                                        E-Sign
                                    </label>
                                    <div className="mb-2 button-r2">
                                        <textarea
                                            className="form-control border border-dark button-r"
                                            {...register("eSign", { required: true })}
                                            id="exampleFormControlTextarea1"
                                            rows="6"
                                        ></textarea>
                                        {errors.eSign?.type === "required" && (
                                            <p className="text-danger"> "Field is required" </p>
                                        )}
                                    </div>

                                    <div className="d-flex justify-content-center align-items-center mb-3">
                                        <button
                                            className="btn btn-white  mx-1 px-4 py-1 mt-2 text-white second-b spantwo lead button-r2 "
                                            type="submit"
                                        >
                                            Change
                                        </button>

                                        <button
                                            className="btn btn-outline-info text-dark mx-1 px-4 py-1 mt-2 first-b button-bord spanone  button-r2 invoiceButton"
                                            type="button"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end align-items-center mb-3">
                                <button
                                    className="btn btn-white  mx-1 px-4 py-2 mt-2 text-white second-b spantwo lead button-r2 "
                                    type="submit"
                                >
                                    Save Invoice
                                </button>

                                {/* <button className="invoiceButton text-center first-b  spanone gilroy  mx-1 px-5 py-2 mt-2" type="button">Send</button> */}

                                <button
                                    className="btn btn-outline-info text-dark mx-1 px-5 py-2 mt-2 first-b button-bord spanone  button-r2 invoiceButton"
                                    type="submit"
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    </form>

                    {modal && (
                        <form onSubmit={handleSubmit2(onSubmit2)}>
                            <div className="modal1">
                                <div className="overlay1">
                                    <div className="modal-content1">
                                        <div
                                            className="p-3 bg-white"
                                            style={{ width: 900, height: 250, marginLeft: "-1.8rem" }}
                                        >
                                            <h5>Add New item</h5>
                                            <div className="d-flex justify-content-around align-items-center">
                                                <div className="col mx-3">
                                                    <label
                                                        htmlFor="exampleInputEmail1"
                                                        className="form-label fw-bold"
                                                    >
                                                        {" "}
                                                        Item Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control button-r sectionbg text-dark"
                                                        {...register2("itemName", { required: true })}
                                                    />
                                                    {errors2.itemName?.type === "required" && (
                                                        <p className="text-danger"> "required" </p>
                                                    )}
                                                </div>
                                                <div className="col mx-3">
                                                    <label
                                                        htmlFor="exampleInputEmail1"
                                                        className="form-label fw-bold"
                                                    >
                                                        {" "}
                                                        SKU
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control button-r sectionbg text-dark"
                                                        {...register2("sku", { required: true })}
                                                    />
                                                    {errors2.sku?.type === "required" && (
                                                        <p className="text-danger"> "Required" </p>
                                                    )}
                                                </div>
                                                <div className="col mx-3">
                                                    <label
                                                        htmlFor="exampleInputEmail1"
                                                        className="form-label fw-bold"
                                                    >
                                                        Quantity
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control button-r sectionbg text-dark"
                                                        placeholder="0"
                                                        {...register2("quantity", { required: true })}
                                                    />
                                                    {errors2.quantity?.type === "required" && (
                                                        <p className="text-danger"> "Min is 1" </p>
                                                    )}
                                                </div>
                                                <div className="col mx-3">
                                                    <label
                                                        htmlFor="exampleInputEmail1"
                                                        className="form-label fw-bold"
                                                    >
                                                        Unit Price
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control button-r sectionbg text-dark"
                                                        placeholder="0"
                                                        {...register2("unitPrice", { required: true })}
                                                    />
                                                    {errors2.unitPrice?.type === "required" && (
                                                        <p className="text-danger"> "Required" </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mt-4 ms-3">
                                                <button
                                                    className="btn btn-white  mx-1 px-4 py-2  text-white second-b spantwo lead button-r2 "
                                                    type="submit"
                                                >
                                                    Add
                                                </button>

                                                <button
                                                    className="btn btn-outline-info text-dark mx-1 px-4 py-2 first-b button-bord spanone  button-r2 invoiceButton"
                                                    type="button"
                                                    onClick={toggleModal}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}


                    {modal2 && (
                        <div className="modal1">
                            <div className="overlay1">
                                <div className="modal-content1">
                                    <div
                                        className="p-3 bg-white"
                                        style={{ width: 900, minHeight: 300, marginLeft: "-1.7rem" }}
                                    >
                                        <h5 className="fw-bold">Saved Items</h5>
                                        <Table>
                                            <thead>
                                                <tr
                                                    className="tbg px-3  mb-3 fw-bold text-dark py-3"
                                                    style={{ borderRadius: 20 }}
                                                >
                                                    <td className="tdWidth">
                                                        <input
                                                            className="form-check-input "
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="flexRadioDefault1"
                                                        />
                                                    </td>
                                                    <td>Item Name</td>
                                                    <td>SKU</td>
                                                    <td>Quantity</td>
                                                    <td>Unit Price</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myData.length? <> {
                                                        myData.map((item) => {
                                                            return (
                                                                    <tr>
                                                                    <td className="tdWidth">
                                                                            <input
                                                                                className="form-check-input"
                                                                                type="radio"
                                                                                name="flexRadioDefault"
                                                                                id="flexRadioDefault1"
                                                                            />
                                                                        </td>
                                                                        <td>{item.itemName}</td>
                                                                        <td>{item.sku}</td>
                                                                        <td>{item.quantity}</td>
                                                                        <td>${item.unitPrice}</td>
                                                                    </tr>
                                                            )
                                                        })
                                                    }</> : <> <td className="my-2"> No items added </td> </>
                                                }
                                               
                                            </tbody>
                                            </Table>

                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a
                                                            className="page-link"
                                                            href="#"
                                                            aria-label="Previous"
                                                        >
                                                            <span aria-hidden="true">&laquo;</span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            1
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            2
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#">
                                                            3
                                                        </a>
                                                    </li>
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                       
                                        <div className="d-flex justify-content-start mt-4 ms-3">
                                            <button
                                                className="btn btn-white  mx-1 px-4 py-2  text-white second-b spantwo lead button-r2 "
                                                type="submit"
                                            >
                                                Add
                                            </button>

                                            <button
                                                className="btn btn-outline-info text-dark mx-1 px-4 py-2 first-b button-bord spanone  button-r2 invoiceButton"
                                                type="button"
                                                onClick={toggleModal2}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}



                </section>
            </div>
        </>
    );
};

export default Invoice;
