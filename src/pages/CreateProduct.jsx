import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCreateBatch } from "../features/createBatchSlice";
import { useForm } from "react-hook-form";
import InputBox from "../components/InputBox";
import DropDown from "../components/DropDown";
import Navbar from "../components/Navbar";
import ImageUpload from "../components/ImageUpload";
import CheckBox from "../components/CheckBox";

export default function CreateProduct() {
  const dispatch = useDispatch();
  const allOrders = useSelector((state) => state.orders);
  console.log("all Orders at createOrder", allOrders);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("inside onSubmit", data);

    dispatch(addCreateBatch(data));
    reset();
  };

  const buttonStyle = {
    backgroundColor: "#2CAE66",
    borderRadius: "8px",
    width: "138px",
    height: "42px",
    paddingLeft: "16px",
    paddingRight: "16px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "22px",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-8">
        <Navbar
          title="Create Product"
          buttonStyle={buttonStyle}
          btnTitle="Next"
        />

        <div className="flex flex-row mt-7 ">
          <div className="flex flex-col items-center">
            <div
              className="h-5 w-5 rounded-full flex items-center justify-center text-xs text-white"
              style={{ border: "1px", backgroundColor: "#2CAE66" }}
            >
              1
            </div>
            <div
              style={{
                color: "#2CAE66",
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "14.06px",
              }}
            >
              Add Product
            </div>
          </div>
          <div
            className="border border-1 border-black border-dashed h-0 w-64"
            style={{ position: "relative", left: "-23px", top: "8px" }}
          ></div>
          <div
            className="flex flex-col items-center "
            style={{ position: "relative", left: "-36px" }}
          >
            <div
              className="h-5 w-5 rounded-full flex items-center justify-center text-green-500"
              style={{ border: "1px solid", borderColor: "#2CAE66" }}
            >
              2
            </div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: "500",
                lineHeight: "14.06px",
              }}
            >
              Materials
            </div>
          </div>
        </div>

        <div className="grid gap-y-4 pt-8 ">
          <div
            style={{
              color: "#2D2D2D",
              fontWeight: "500",
              lineHeight: "19px",
              fontSize: "16px",
            }}
          >
            Basic Details
          </div>

          <div className="grid grid-cols-3 gap-8">
            <ImageUpload
              type="file"
              title="Drag or Upload a Product Image*"
              name="productName1"
              className="row-span-2"
              required
              errors={errors}
              register={register("productName1", {})}
            />
            <InputBox
              type="text"
              title="Product Name*"
              name="productName"
              required
              errors={errors}
              register={register("productName", {})}
            />

            <InputBox
              type="text"
              title="Product Name/Code*"
              name="productNameCode"
              errors={errors}
              required
              register={register("productNameCode", {})}
            />

            <DropDown
              title="Category*"
              name="category"
              errors={errors}
              required
              register={register("category", {})}
            />

            <DropDown
              title="Sub Category*"
              name="subCategory"
              errors={errors}
              required
              register={register("subCategory", {})}
            />
          </div>
        </div>
        <div className="grid gap-y-4 pt-8 ">
          <div
            style={{
              color: "#2D2D2D",
              fontWeight: "500",
              lineHeight: "19px",
              fontSize: "16px",
            }}
          >
            Other Details
          </div>

          <div className="grid grid-cols-3 gap-8 ">
            <InputBox
              type="number"
              title="UPC*"
              name="upc"
              required
              errors={errors}
              register={register("upc", {})}
            />
            <InputBox
              type="text"
              title="GL Number*"
              name="glNumber"
              required
              errors={errors}
              register={register("glNumber", {})}
            />

            <div className="row-span-2 flex items-center">
              <CheckBox />
            </div>

            <InputBox
              type="number"
              title="Minimum Quantity*"
              name="minimumQuantity"
              errors={errors}
              required
              register={register("minimumQuantity", {})}
            />

            <DropDown
              title="Measurement Type*"
              name="measurementType"
              errors={errors}
              required
              register={register("measurementType", {})}
            />

            <InputBox
              type="text"
              title="Description (150 Words)"
              className="col-span-3"
              name="minimumQuantity"
              errors={errors}
              required
              register={register("minimumQuantity", {})}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
