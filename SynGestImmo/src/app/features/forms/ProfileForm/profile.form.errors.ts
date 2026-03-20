import {ErrorFormModel} from '../../shared/components/form/models/errorFormModel';

export const PROFILE_FORM_ERRORS: ErrorFormModel[] = [
  {name: 'id', type: 'required', message: 'Id name is required'},
  {name: 'entityType', type: 'noValueSelected', message: 'Entity Type is required'},
  {name: 'displayName', type: 'required', message: 'Display name is required'},
  {name: 'email', type: 'required', message: 'Email is required'},
  {name: 'email', type: 'email', message: 'Email is invalid'},
  {name: 'phone', type: 'required', message: 'Phone is required'},
  {name: 'lastName', type: 'required', message: 'Firstname is required'},
  {name: 'firstName', type: 'required', message: 'Lastname is required'},
  {name: 'birthDate', type: 'required', message: 'Birthday date is required'},
  {name: 'nationalId', type: 'required', message: 'National Id is required'},
]
