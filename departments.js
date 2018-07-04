'use strict';
import departmentsAttributes from 'departmentsAttributes';
import departmentsData from 'departmentsData';
const debug   = require('debug');

let table_name = 'Department'


const get = () => {

	return departmentsData;

};


// @TODO think about it. GS using more advanced method of saving grocery to user array.
// but in order to simplify stuff - we'll remove connection between import and methods from inner models.
//@TODO replace stuff like cb to a simple console or debug log that relation was successfully created

const relate = async (options, results, helper) => {

  let server
  let database
  let raven
  ( {server, database, raven} = options );



  if( !results || !results.departments || !results.groceries ) {
    raven.captureException("cannot attach additional data to recipes");
  }

  //@TODO create a method with foreach for each attribute in order to attach data to recipe
  helper.attach( results.departments, results.groceries, departmentsAttributes[0]);

};

module.exports.get        = get;
module.exports.table_name = table_name;
module.exports.relate     = relate;
