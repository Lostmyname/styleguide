export default {
  "name": "Button",
  "propTypes": [
    {
      "propName": "text",
      "type": "string",
      "value": "This is a button"
    },
    {
      "propName": "buttonStyle",
      "type": "oneOf",
      "value": ["raised", "flat"]
    },
    {
      "propName": "type",
      "type": "oneOf",
      "value": ["primary", "alert", "secondary"]
    }
  ]
}