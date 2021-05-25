import React, { useState, useEffect } from "react";
import { getCookie, isAuth } from "../../../Api/auth";
import { createProperty } from "../../../Api/property";
import "./AddProperty.scss";
import AddPropertyFloorPlan from "./AddPropertyFloorPlan/AddPropertyFloorPlan";
import AddPropertyInformation from "./AddPropertyInformation/AddPropertyInformation";
import AddPropertyListing from "./AddPropertyListing/AddPropertyListing";
import AddPropertyLocation from "./AddPropertyLocation/AddPropertyLocation";
import AddPropertyMedia from "./AddPropertyMedia/AddPropertyMedia";
import { useHistory } from "react-router-dom";

function AddProperty() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(isAuth()._id);
  }, []);

  const history = useHistory();
  const token = getCookie("token");
  const [Floors, setFloors] = useState([]);
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [PropertyForValue, setPropertyForValue] = useState("Sell");
  const [PropertyTypeValue, setPropertyTypeValue] = useState("Commercial");
  const [PropertyStatusValue, setPropertyStatusValue] =
    useState("Under Construction");
  const [PriceValue, setPriceValue] = useState(0);
  const [AddressValue, setAddressValue] = useState("");
  const [StateValue, setStateValue] = useState("Uttar Prdesh");
  const [CityValue, setCityValue] = useState("Noida");
  const [NeighborValue, setNeighborValue] = useState("");
  const [PincodeValue, setPincodeValue] = useState(0);
  const [CountryValue, setCountryValue] = useState("India");
  const [MapLatValue, setMapLatValue] = useState(0);
  const [MapLongValue, setMapLongValue] = useState(0);
  const [ReraNumValue, setReraNumValue] = useState(0);
  const [ProjectAreaValue, setProjectAreaValue] = useState(0);
  const [ProjectSizeValue, setProjectSizeValue] = useState(0);
  const [ProjectDateValue, setProjectDateValue] = useState(0);
  const [ProjectVideoUrlValue, setProjectVideoUrlValue] = useState("");
  const [ProjectVideo360UrlValue, setProjectVideo360UrlValue] = useState("");
  const [ProjectGroupValue, setProjectGroupValue] = useState("");
  const [FloorPlanValue, setFloorPlanValue] = useState([]);
  const [FloorDescriptionValue, setFloorDescriptionValue] = useState("");
  const [FloorBedValue, setFloorBedValue] = useState("");
  const [FloorSizeValue, setFloorSizeValue] = useState("");
  const [FloorBathValue, setFloorBathValue] = useState("");
  const [FloorAreaValue, setFloorAreaValue] = useState(0);
  const [FloorPriceValue, setFloorPriceValue] = useState(0);

  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const onPropertyForChange = (event) => {
    setPropertyForValue(event.currentTarget.value);
  };

  const onPropertyTypeChange = (event) => {
    setPropertyTypeValue(event.currentTarget.value);
  };
  const onPropertyStatusChange = (event) => {
    setPropertyStatusValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onAddressChange = (event) => {
    setAddressValue(event.currentTarget.value);
  };

  const onPincodeChange = (event) => {
    setPincodeValue(event.currentTarget.value);
  };

  const onCitiesSelectChange = (event) => {
    setCityValue(event.currentTarget.value);
  };

  const onStatesSelectChange = (event) => {
    setStateValue(event.currentTarget.value);
  };
  const onNeighborChange = (event) => {
    setNeighborValue(event.currentTarget.value);
  };

  const onCountryChange = (event) => {
    setCountryValue(event.currentTarget.value);
  };

  const onMapLatChange = (event) => {
    setMapLatValue(event.currentTarget.value);
  };
  const onMapLongChange = (event) => {
    setMapLongValue(event.currentTarget.value);
  };
  const onReraNumChange = (event) => {
    setReraNumValue(event.currentTarget.value);
  };

  const onProjectAreaChange = (event) => {
    setProjectAreaValue(event.currentTarget.value);
  };
  const onProjectSizeChange = (event) => {
    setProjectSizeValue(event.currentTarget.value);
  };
  const onProjectDateChange = (event) => {
    setProjectDateValue(event.currentTarget.value);
  };
  const onProjectVideoUrlChange = (event) => {
    setProjectVideoUrlValue(event.currentTarget.value);
  };
  const onProjectVideo360UrlChange = (event) => {
    setProjectVideo360UrlValue(event.currentTarget.value);
  };
  const onProjectGroupChange = (event) => {
    setProjectGroupValue(event.currentTarget.value);
  };
  useEffect(() => {
    onFloorPlanChange();
    setFloors(Floors);
    console.log(Floors);
  }, []);

  const onFloorPlanChange = () => {
    setFloorPlanValue([
      ...FloorPlanValue,
      {
        floor_plan_desc: FloorDescriptionValue,
        floor_plan_area: FloorAreaValue,
        floor_plan_Bedroom: FloorBathValue,
      },
    ]);
    console.log(FloorPlanValue);
  };
  const onFloorDescriptionChange = (event) => {
    setFloorDescriptionValue(event.currentTarget.value);
  };

  const onFloorBedChange = (event) => {
    setFloorBedValue(event.currentTarget.value);
  };
  const onFloorSizeChange = (event) => {
    setFloorSizeValue(event.currentTarget.value);
  };

  const onFloorBathChange = (event) => {
    setFloorBathValue(event.currentTarget.value);
  };
  const onFloorAreaChange = (event) => {
    setFloorAreaValue(event.currentTarget.value);
  };

  const onFloorPriceChange = (event) => {
    setFloorPriceValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  console.log(FloorPlanValue);
  console.log(user);
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue) {
      return alert("fill all the fields first!");
    }
    console.log(FloorPlanValue);

    const variables = {
      title: TitleValue,
      description: DescriptionValue,
      images: Images,
      propertyFor: PropertyForValue,
      type: PropertyTypeValue,
      status: PropertyStatusValue,
      price: PriceValue,
      address: AddressValue,
      state: StateValue,
      city: CityValue,
      neighborhood: NeighborValue,
      pincode: PincodeValue,
      country: CountryValue,
      map_lat: MapLatValue,
      map_long: MapLongValue,
      rera_number: ReraNumValue,
      floor_plan: FloorPlanValue,
      project_by: user,
    };

    createProperty(variables, token).then((response) => {
      if (response) {
        alert("Property Successfully Uploaded");
        history.push("/");
      } else {
        alert("Failed to upload Property");
      }
    });
  };

  return (
    <form className="addproperty" onSubmit={onsubmit}>
      <AddPropertyListing
        TitleValue={TitleValue}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        DescriptionValue={DescriptionValue}
        PriceValue={PriceValue}
        onPriceChange={onPriceChange}
        PropertyForValue={PropertyForValue}
        onPropertyForChange={onPropertyForChange}
        PropertyStatusValue={PropertyStatusValue}
        onPropertyStatusChange={onPropertyStatusChange}
        PropertyTypeValue={PropertyTypeValue}
        onPropertyTypeChange={onPropertyTypeChange}
      />
      <AddPropertyLocation
        AddressValue={AddressValue}
        onAddressChange={onAddressChange}
        StateValue={StateValue}
        onStatesSelectChange={onStatesSelectChange}
        PincodeValue={PincodeValue}
        onPincodeChange={onPincodeChange}
        CityValue={CityValue}
        onCitiesSelectChange={onCitiesSelectChange}
        NeighborValue={NeighborValue}
        onNeighborChange={onNeighborChange}
        onCountryChange={onCountryChange}
        CountryValue={CountryValue}
        MapLatValue={MapLatValue}
        onMapLatChange={onMapLatChange}
        MapLongValue={MapLongValue}
        onMapLongChange={onMapLongChange}
      />
      <AddPropertyInformation
        ReraNumValue={ReraNumValue}
        onReraNumChange={onReraNumChange}
        ProjectAreaValue={ProjectAreaValue}
        onProjectAreaChange={onProjectAreaChange}
        ProjectSizeValue={ProjectSizeValue}
        onProjectSizeChange={onProjectSizeChange}
        ProjectDateValue={ProjectDateValue}
        onProjectDateChange={onProjectDateChange}
        ProjectVideoUrlValue={ProjectVideoUrlValue}
        onProjectVideoUrlChange={onProjectVideoUrlChange}
        ProjectVideo360UrlValue={ProjectVideo360UrlValue}
        onProjectVideo360UrlChange={onProjectVideo360UrlChange}
        ProjectGroupValue={ProjectGroupValue}
        onProjectGroupChange={onProjectGroupChange}
      />
      <AddPropertyMedia refreshFunction={updateImages} />
      <AddPropertyFloorPlan
        FloorPlanValue={FloorPlanValue}
        onFloorPlanChange={onFloorPlanChange}
        FloorDescriptionValue={FloorDescriptionValue}
        onFloorDescriptionChange={onFloorDescriptionChange}
        FloorBedValue={FloorBedValue}
        onFloorBedChange={onFloorBedChange}
        FloorBathValue={FloorBathValue}
        onFloorBathChange={onFloorBathChange}
        FloorSizeValue={FloorSizeValue}
        onFloorSizeChange={onFloorSizeChange}
        FloorAreaValue={FloorAreaValue}
        onFloorAreaChange={onFloorAreaChange}
        FloorPriceValue={FloorPriceValue}
        onFloorPriceChange={onFloorPriceChange}
        onSubmit={onSubmit}
      />
    </form>
  );
}

export default AddProperty;
