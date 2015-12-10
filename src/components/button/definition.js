export default {
  "name": "Button",
  "propTypes": [
    {
      "name": "test",
      "type": "string",
      "valie": "This is a button"
    },
    {
      "name": "buttonStyle",
      "type": "oneOf",
      "value": ["raised", "flat"]
    },
    {
      "name": "type",
      "type": "oneOf",
      "value": ["primary", "alert", "secondary"]
    }
  ]
}