function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  const latitude = document.querySelector("#latitude").value;
  const longitude = document.querySelector("#longitude").value;

  const isLatitudeInvalid = latitude > 90 || latitude < -90;
  const isLongitudeInvalid = longitude > 180 || longitude < -180;

  if(isLatitudeInvalid) {
    document.querySelector("#lat-error").style.visibility = "visible";
  } else {
    document.querySelector("#lat-error").style.visibility = "hidden";
  }
  if(isLongitudeInvalid) {
    document.querySelector("#long-error").style.visibility = "visible";
  } else {
    document.querySelector("#long-error").style.visibility = "hidden";
  }

  if(isLatitudeInvalid || isLongitudeInvalid) {
    // Do nothing
    event.preventDefault();
  } else {
    // Submit form
    document.querySelector("#lat-error").style.visibility = "hidden";
    document.querySelector("#long-error").style.visibility = "hidden";
  }
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
