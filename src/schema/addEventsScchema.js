import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  event_name: Yup.string().required("Event name is required"),
  event_type: Yup.string().required("Event type is required"),
  event_start_date: Yup.date().required("Start date is required").nullable(),
  event_end_date: Yup.date().required("End date is required").nullable(),
  event_description: Yup.string().required("Event description is required"),
  event_organisation: Yup.string().required("Event organisation is required"),
  event_handle_by: Yup.string().required("Event handle by is required"),
  total_number_of_sub_events: Yup.number()
    .required("Total number of sub events is required")
    .typeError("Total number of sub events must be a number"),
});
