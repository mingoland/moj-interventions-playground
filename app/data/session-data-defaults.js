/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

module.exports = {

  // Insert values here
  /*
  users: {
    'GB123456': {'server-user-name': 'Alex'}
  },
  */
  var users = {
    'GB123456' : 'Alex',
    'EN000001' : 'Gary'
  }

  /*

  {{ govukCheckboxes({
    name: "vehicle-features",
    fieldset: {
      legend: {
        text: "Which of these applies to your vehicle?"
      }
    },
    hint: {
      text: "Select all that apply"
    },
    items: [
      {
        value: "Heated seats",
        text: "Heated seats",
        id: "vehicle-features-heated-seats",
        checked: checked("vehicle-features", "Heated seats")
      },
      {
        value: "GPS",
        text: "GPS",
        id: "vehicle-features-gps",
        checked: checked("vehicle-features", "GPS")
      },
      {
        value: "Radio",
        text: "Radio",
        id: "vehicle-features-radio",
        checked: checked("vehicle-features", "Radio")
      }
    ]
  }) }}
  */
}