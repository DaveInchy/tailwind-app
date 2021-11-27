//convert a css string with code to a react Stylesheet object
export default class Style {
  constructor(str, obj = {}) {
    var regex = /([\w-]*)\s*:\s*([^;]*)/g;
    var match,
      properties = {};

    str += " " + this.convProps(obj);

    while ((match = regex.exec(str)))
      properties[match[1]] = match[2].trim();

    this.properties = properties;
    return this.properties;
  }

  toString = () => {
    var str = "";
    for (var prop in this.properties)
      str += `${prop}: ${this.properties[prop]};`;

    return str;
  };

  convProps = (obj) => {
    var str = "";
    for (var prop in obj)
      str += `${prop}: ${obj[prop]};`;

    return str;
  };

  convStr = (str) => {
    var regex = /([\w-]*)\s*:\s*([^;]*)/g;
    var match, properties = {};

    while ((match = regex.exec(str)))
      properties[match[1]] = match[2].trim();

    return properties;
  };
}