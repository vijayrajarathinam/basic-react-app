const Customer = require("../models/Customer");

const ErrorHandler = require("../utils/errorHandler");
const catchAsync = require("../utils/catchAsyncErrors");

exports.create = catchAsync(async (req, res) => {
  // Customer.create({ name: "vijay", email: "vijay@gmail.com" });
  const customer = await Customer.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.status(201).json({ success: true, data: customer });
});

exports.all = catchAsync(async (req, res) => {
  const customers = await Customer.findAll();
  res.status(200).json({ success: true, data: customers });
});

exports.getOne = catchAsync(async (req, res, next) => {
  const customer = await Customer.findAll({
    where: { id: req.params.id },
  });
  if (!customer) return next(new ErrorHandler("Customer not Found", 404));
  res.status(200).json({ success: true, data: customer[0] });
});

exports.update = catchAsync(async (req, res) => {
  const { params, body } = req;
  const customer = await Customer.findAll({ where: { id: params.id } });
  if (!customer) return res.status(404).json({ success: false, message: "Customer not Found" });

  const updated = await Customer.update({ name: body.name, email: body.email }, { where: { id: params.id } });

  res.status(200).json({ success: true, data: updated });
});

exports.remove = catchAsync(async (req, res) => {
  const customer = await Customer.findAll({ where: { id: req.params.id } });
  if (!customer) return res.status(404).json({ success: false, message: "Customer not Found" });

  await Customer.destroy({ where: { id: req.params.id } });
  res.status(200).json({ success: true, message: "Customer Deleted Successfully!!..." });
});
