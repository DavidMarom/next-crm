'use client'
import { useState } from 'react';
import http from '../../services/http';
import { PageContainer } from '@/components';
import { Formik } from 'formik';
import { Col } from '@/components';


const Page01 = () => {
  const [loading, setLoading] = useState(false);

  return (
    <PageContainer>
      <h1>Add an item to the list</h1>
      <br />
      <h2>Insert a new record:</h2>

      {
        loading ? <h1>Loading...</h1> :
          <Formik
            initialValues={{ name: '', price: '' }}
            validate={values => {
              const errors = {};
              if (!values.name) { errors.name = 'Required' }
              else if (!/^[a-zA-Z]+$/.test(values.email)) { errors.name = 'Invalid name' }
              return errors;
            }}
            onSubmit={async ({ name, price }, { setSubmitting }) => {
              setLoading(true);
              await http.post("/api01", { name, price });
              setSubmitting(false);
              setLoading(false);

            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

              <form onSubmit={handleSubmit}>
                <Col>
                  <div>
                    <p>Name</p>
                    <input type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                    {errors.name && touched.name && errors.name}
                  </div>

                  <div>
                    <p>Price</p>
                    <input type="number" name="price" onChange={handleChange} onBlur={handleBlur} value={values.price} />
                    {errors.price && touched.price && errors.price}
                  </div>

                  <button type="submit" disabled={isSubmitting}>Submit</button>
                </Col>
              </form>
            )}
          </Formik>
      }
    </PageContainer>
  );
}

export default Page01;
