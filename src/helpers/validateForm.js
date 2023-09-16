function validateForm (validationSchema, values, config = {}) {
  let errors = {};

  try {
    validationSchema.validateSync(values, { abortEarly: false, ...config });
  } catch (error) {
    const validationErrors = error.inner.reduce((acc, curr) => {
      acc[curr.path] = curr.message;
      return acc;
    }, {});

    errors = validationErrors;
  }

  return { errors, values, isValid: !Object.keys(errors).length };
}

export default validateForm;
