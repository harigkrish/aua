import { message,Upload } from "antd";
export const fileValidation=(file,validation)=>{
  const isCSV = 0;
  var status = "";
  var fileSize = file.size / (1024 * 1024);
  var exePattern = /(?:\.([^.]+))?$/;
  var validSize = parseInt(validation.size.valids[0].split("mb")[0]);
  var ext = exePattern.exec(file.name)[1];
  
  validation.type.valids.map((t, i) => {
    if (t === ext) {
      if (fileSize < validSize) {
        isCSV = 1;
      } else {
        status = "size";
      }
    } else if (i === validation.type.valids.length - 1 && isCSV === 1) {
      status = "type";
    }
  });
  if (status === "size") message.error(validation.size.invalid_massage);
  else message.error(validation.type.invalid_massage);
  return isCSV || Upload.LIST_IGNORE;
};
