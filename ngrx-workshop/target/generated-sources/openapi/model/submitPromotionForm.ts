/**
 * Simple API overview
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://github.com/Backbase/backbase-openapi-tools).
 * https://github.com/Backbase/backbase-openapi-tools
 * Do not edit the class manually.
 */

import { UserAddress } from './userAddress';


export interface SubmitPromotionForm { 
    ["firstName"]: string;
    ["middleName"]: string;
    ["lastName"]: string;
    ["email"]: string;
    ["phone"]: number;
    ["ssn"]: number;
    ["maritalStatus"]: string;
    ["employmentStatus"]: string;
    ["address"]?: UserAddress;
}
