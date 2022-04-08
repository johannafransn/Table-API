import { useState } from "react";
import "../index.scss";

export default function SidePanel({
  _handleCheckboxChange,
  radioBtnSelected,
  _handleSearchText,
}) {
  const isRadioSelected = (radioValue) => {
    if (radioBtnSelected === radioValue) return true;
    else return false;
  };

  const _renderSearchInput = () => {
    return (
      <div className="">
        <div className="col-md-6 input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={_handleSearchText}
          />
        </div>
      </div>
    );
  };

  return (
    <div class="col-sm-3 mb-2">
      <h4 class="mb-3">Interval Fetch</h4>
      <ul class="nav flex-column">
        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="5"
            checked={isRadioSelected("5")}
            onChange={(e) => _handleCheckboxChange(e)}
          />
          <label class="form-check-label mb-3 purple" for="flexRadioDefault1">
            Every 5 seconds
          </label>
        </div>
        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={"10"}
            checked={isRadioSelected("10")}
            onChange={(e) => _handleCheckboxChange(e)}
          />
          <label class="form-check-label mb-3 purple" for="flexRadioDefault2">
            Every 10 seconds
          </label>
        </div>

        <div class="form-check">
          <input
            className="form-check-input"
            type="radio"
            value={"15"}
            checked={isRadioSelected("15")}
            onChange={(e) => _handleCheckboxChange(e)}
          />
          <label class="form-check-label mb-3 purple" for="flexRadioDefault2">
            Every 15 seconds
          </label>
        </div>

        <p>You have chosen: {radioBtnSelected}</p>
        {_renderSearchInput()}
      </ul>
    </div>
  );
}
