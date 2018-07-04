'use strict';
import ingredientsData from './ingredientsData';
const debug   = require('debug');

let table_name = 'Ingredient'

const get = (departments) => {


  	return ingredientsData;

};




// nt used cause GS updated their structure
// function attachDepartmentsToIngredients(departments, ingredients){

// 	// 	ingredient.updateAttribute(relation1, arrayWithIds[0]);


//@TODO replace with the latst veersion
//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//const attachDepartmentsToIngredients = (departments, ingredients, cb) => {
//  attach(departments, ingredients, cb);
//};

//
module.exports.get   = get;
module.exports.table_name   = table_name;
