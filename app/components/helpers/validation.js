var exports = module.exports = {}

exports.isEmpty = async ( post_data ) => {

  let isEmpty = {};
  isEmpty.status = false;

  for( let key in post_data ){
    if( post_data[key] == "" ){
      isEmpty[key]    = "This field is required.";
      isEmpty.status = true;
    }
  }

  return isEmpty;
}