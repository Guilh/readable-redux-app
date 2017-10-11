import { errorsActionTypes } from '../actionTypes'

export function raiseValidationError(validationErrors) {
    return {
        type: errorsActionTypes.VALIDATION_ERROR_RAISED,
        errors: validationErrors
    }
}

export function clearValidationErrors() {
    return {
        type: errorsActionTypes.CLEAR_VALIDATION_ERRORS
    }
}
