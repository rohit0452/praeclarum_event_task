import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { deleteevent } from "../slices/events.slice";
import EditModal from "./EditModal";

const List = () => {
  const [isShow, setisShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [sortedData, setSortedData] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState("");
  const dispatch = useDispatch();
  const listData = useSelector((state) => state.addevent.data);

  const handleClose = () => setisShow(false);

  const deleteEvent = (event_id) => {
    dispatch(deleteevent(event_id));
  };

  const sortData = (event) => {
    const { value } = event.target;

    const sortedList = [...listData].sort((a, b) => {
      return a[value].localeCompare(b[value]);
    });

    setSortedData(sortedList);
  };

  const handleFilterChange = (event) => {
    setFilterCriteria(event.target.value);
  };

  const filterData = (data) => {
    return data.filter((item) => {
      return (
        item.event_name.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        item.event_type.toLowerCase().includes(filterCriteria.toLowerCase()) ||
        item.event_organisation
          .toLowerCase()
          .includes(filterCriteria.toLowerCase()) ||
        item.total_number_of_sub_events
          .toString()
          .includes(filterCriteria.toLowerCase())
      );
    });
  };

  const dataToDisplay = filterData(
    sortedData.length > 0 ? sortedData : listData
  );

  return (
    <div>
      <Header></Header>
      <div className="p-4">
        {listData.length !== 0 ? (
          <>
            <div className="row mb-3">
              <div className="col-md-3">
                <label htmlFor="sort">Sort By</label>
                <select
                  onChange={(e) => sortData(e)}
                  className="form-control"
                  name="sort"
                  id="sort"
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="event_name">Event Name</option>
                  <option value="event_type">Event Type</option>
                  <option value="event_organisation">Event Organisation</option>
                </select>
              </div>
              <div className="col-md-3 ms-3">
                <label htmlFor="filter">Filter/Search</label>
                <input
                  type="text"
                  className="form-control"
                  name="filter"
                  id="filter"
                  placeholder="Type to filter..."
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Event Type</th>
                  <th scope="col">Start Date</th>
                  <th scope="col">End Date</th>
                  <th scope="col">Event Description</th>
                  <th scope="col">Event Handled By</th>
                  <th scope="col">Event Organisation</th>
                  <th scope="col">Total Number of Sub Events</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dataToDisplay.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{data.event_name}</td>
                      <td>{data.event_type}</td>
                      <td>{data.event_start_date}</td>
                      <td>{data.event_end_date}</td>
                      <td>{data.event_description}</td>
                      <td>{data.event_handle_by}</td>
                      <td>{data.event_organisation}</td>
                      <td>{data.total_number_of_sub_events}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary m-1"
                          onClick={() => {
                            setisShow(true);
                            setSelectedData(data);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteEvent(data.id)}
                          className="btn btn-sm btn-danger m-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <div
            className="d-flex justify-content-center"
            style={{ height: "70vh" }}
          >
            <img
              src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/og-image-uYok0y3JZG.png"
              alt=""
            />
          </div>
        )}
      </div>
      {isShow && (
        <EditModal
          showPopup={isShow}
          selectedData={selectedData}
          handleClose={handleClose}
        ></EditModal>
      )}
    </div>
  );
};

export default List;
