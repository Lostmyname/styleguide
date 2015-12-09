export default {
  "name": "Button",
  "propTypes": [
    {
      "name": "test",
      "type": "string"
    },
    {
      "name": "mode",
      "type": "oneOf",
      "value": ["raised"]
    },
    {
      "name": "type",
      "type": "oneOf",
      "value": ["primary", "alert"]
    }
  ]
}