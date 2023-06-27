import React, { Fragment } from 'react';
import {useFormik} from 'formik';

const Mine = () => {
  const formik = useFormik(
    {
      initialValues : {
        email: ''
      },
      onSubmit: values => {
        console.log(values);
      }
    }
  )

  return (
    <Fragment>
    <form onSubmit={formik.handleSubmit}>
    <input
    name='email'
    id='email'
    type='email'
    onChange={formik.handleChange}
    onSubmit={formik.handleSubmit}
    />
    <button type="submit">Submit</button>

    </form>
    </Fragment>
  )
}


export default Mine;
