import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignupSchema } from "../schema/addEventsScchema";
import { useDispatch, useSelector } from "react-redux";
import { addevent, editevent } from "../slices/events.slice";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

const AddEvents = ({ initialData, handleClose }) => {
  const [initialValues, setInitialValues] = useState({
    event_name: "",
    event_type: "",
    event_start_date: "",
    event_end_date: "",
    event_description: "",
    event_handle_by: "",
    event_organisation: "",
    total_number_of_sub_events: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      {!initialData ? <Header /> : <></>}
      <Formik
        initialValues={initialData || initialValues}
        validationSchema={SignupSchema}
        onSubmit={async (
          values,
          { setSubmitting, resetForm, setFieldError }
        ) => {
          try {
            if (initialData) {
              dispatch(editevent(values));
              handleClose();
            } else {
              dispatch(
                addevent(
                  Object.assign(values, {
                    id: Math.round(Math.random() * 1000000000),
                  })
                )
              );

              navigate("/list");
            }

            resetForm();
            setSubmitting(false);
          } catch (error) {
            console.error("Error submitting form", error);
            setFieldError(
              "general",
              "An error occurred while submitting the form."
            );
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div className="row p-4">
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_name">
                  Event name
                </label>
                <Field
                  className="form-control"
                  placeholder="Event Name"
                  type="text"
                  name="event_name"
                />
                <ErrorMessage
                  name="event_name"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_type">
                  Event type
                </label>
                <Field className="form-control" as="select" name="event_type">
                  <option value="">Select Event</option>
                  <option value="sports">Sports</option>
                  <option value="music">Music</option>
                  <option value="general">General</option>
                  <option value="children">Children</option>
                  <option value="school">School</option>
                </Field>
                <ErrorMessage
                  name="event_type"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_start_date">
                  Start Date
                </label>
                <Field
                  className="form-control"
                  type="date"
                  name="event_start_date"
                />
                <ErrorMessage
                  name="event_start_date"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_end_date">
                  End Date
                </label>
                <Field
                  className="form-control"
                  type="date"
                  name="event_end_date"
                />
                <ErrorMessage
                  name="event_end_date"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_description">
                  Event Description
                </label>
                <Field
                  className="form-control"
                  placeholder="Event Description"
                  type="text"
                  name="event_description"
                />
                <ErrorMessage
                  name="event_description"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_handle_by">
                  Event Handled By
                </label>
                <Field
                  className="form-control"
                  placeholder="Event Organisation"
                  type="text"
                  name="event_handle_by"
                />
                <ErrorMessage
                  name="event_handle_by"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="event_organisation">
                  Event organisation
                </label>
                <Field
                  className="form-control"
                  placeholder="Event Organisation"
                  type="text"
                  name="event_organisation"
                />
                <ErrorMessage
                  name="event_organisation"
                  component="div"
                  className="error"
                />
              </div>
              <div className="col-md-6">
                <label className="mt-3" htmlFor="total_number_of_sub_events">
                  Number of sub events
                </label>
                <Field
                  className="form-control"
                  placeholder="Number of Sub Events"
                  type="text"
                  name="total_number_of_sub_events"
                />
                <ErrorMessage
                  name="total_number_of_sub_events"
                  component="div"
                  className="error"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-3 ">
                <button
                  style={{ width: "100%" }}
                  className="btn  btn-primary mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {initialData ? "Edit" : "Add"}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEvents;
