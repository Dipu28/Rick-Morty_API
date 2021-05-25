import React from "react";
import "./AddPropertyListing.scss";

function AddPropertyListing({
  TitleValue,
  onTitleChange,
  DescriptionValue,
  onDescriptionChange,
  PriceValue,
  onPriceChange,
  PropertyForValue,
  onPropertyForChange,
  onPropertyTypeChange,
  PropertyTypeValue,
  onPropertyStatusChange,
  PropertyStatusValue,
}) {
  const PropertyFor = [{ value: "Sell" }, { value: "Rent" }];

  const PropertyTypes = [{ value: "Commercial" }, { value: "Residential" }];

  const PropertyStatus = [
    { value: "Under Construction" },
    { value: "Mid Stage Construction" },
    { value: "On Going" },
  ];

  return (
    <div className="addpropertylisting">
      <h5>Create Listing</h5>
      <div className="addpropertylisting__content">
        <div className="addpropertylisting__content-title">
          <label htmlFor="">Property Title</label>
          <input
            type="text"
            onChange={onTitleChange}
            value={TitleValue}
          ></input>
        </div>
        <div className="addpropertylisting__content-description">
          <label htmlFor="">Description</label>
          <textarea
            type="text"
            onChange={onDescriptionChange}
            value={DescriptionValue}
          ></textarea>
        </div>
        <div className="addpropertylisting__content-typestatus">
          <div className="addpropertylisting__content-typestatus-type">
            <label htmlFor="">Property For</label>

            <select onChange={onPropertyForChange} value={PropertyForValue}>
              {PropertyFor.map((item) => (
                <option key={item.key} value={item.value}>
                  {item.value}{" "}
                </option>
              ))}
            </select>
          </div>
          <div className="addpropertylisting__content-typestatus-status">
            <label htmlFor="">Property Type</label>
            <select onChange={onPropertyTypeChange} value={PropertyTypeValue}>
              {PropertyTypes.map((item) => (
                <option key={item.key} value={item.value}>
                  {item.value}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="addpropertylisting__content-pricearearoom">
          <div className="addpropertylisting__content-pricearearoom-price">
            <label htmlFor="">Price</label>
            <input
              type="text"
              onChange={onPriceChange}
              value={PriceValue}
            ></input>
          </div>

          <div className="addpropertylisting__content-pricearearoom-room">
            <label htmlFor="">Property status</label>
            <select
              onChange={onPropertyStatusChange}
              value={PropertyStatusValue}
            >
              {PropertyStatus.map((item) => (
                <option key={item.key} value={item.value}>
                  {item.value}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPropertyListing;
